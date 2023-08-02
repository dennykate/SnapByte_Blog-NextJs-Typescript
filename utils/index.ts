import { Dispatch } from "@reduxjs/toolkit";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { toast } from "react-hot-toast";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import { storage } from "@/firebase/config";
import { removeUser } from "@/redux/service/authSlice";

export const truncateText = (text: string, limit: number) => {
  const truncatedText =
    text.length > limit ? text.slice(0, limit) + "..." : text;

  return truncatedText;
};

export const convertLabelToId = (label: string) => {
  return label.replaceAll(" ", "-").toLowerCase();
};

export const logout = (router: AppRouterInstance, dispatch: Dispatch) => {
  console.log("logout");

  dispatch(removeUser());

  router.push("/login");
};

export const uploadImage = (file: File) => {
  if (
    !(
      file.type == "image/png" ||
      file.type == "image/jpeg" ||
      file.type == "image/webp"
    )
  ) {
    toast.error("file type must be png or jpeg or webp");
    return undefined;
  }

  if (file?.size > 1000000) {
    toast.error("file size must be less than 1MB");
    return undefined;
  }

  const storageRef = ref(storage, uuidv4());

  return uploadBytes(storageRef, file).then((snapshot) => {
    return getDownloadURL(snapshot.ref).then((url: string) => {
      return url;
    });
  });
};
