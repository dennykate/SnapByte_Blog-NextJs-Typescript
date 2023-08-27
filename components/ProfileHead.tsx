"use client";

import { UserInfoProps } from "@/types";
import { logout } from "@/utils";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const ProfileHead = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const user: UserInfoProps = JSON.parse(Cookies.get("user") ?? "{}");

  return (
    <div className="w-full mb-[30px]">
      <div className="md:px-8 sm:px-4 px-1 flex flex-col gap-4  ">
        <div className="w-[110px] h-[110px] overflow-hidden rounded-full profile-bg p-1">
          {user.profile ? (
            <Image
              src={user.profile}
              alt="profile"
              width={1024}
              height={1024}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <div className="w-full h-full rounded-full skeleton-box" />
          )}
        </div>
        <div className="flex justify-between items-end  px-1">
          <div className="flex-col items-start">
            <h6 className="font-[600] text-black tracking-[0.1px] text-[20px]">
              {user.name ?? ""}
            </h6>
            <p className="font-[400] text-gray-800 text-sm">
              {user.email ?? ""}
            </p>
          </div>

          <button
            onClick={() => logout(router, dispatch)}
            className="px-[16px] py-[5px] bg-red-500 text-white text-base font-[600] hover:bg-white
           hover:text-red-500 border border-red-500 "
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
