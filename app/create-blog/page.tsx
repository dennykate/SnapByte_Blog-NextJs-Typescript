"use client";

import React, { Suspense, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { BiLoaderAlt } from "react-icons/bi";

import { Input, Layout, Textarea, Thumbnail } from "@/components";
import { useCreateBlogMutation } from "@/redux/api/blogApi";
import Loading from "./loading";
import { totalmem } from "os";
import { logout } from "@/utils";
import { useDispatch } from "react-redux";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [thumbnail, setThumbnail] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [createBlog, { isError, isLoading }] = useCreateBlogMutation();

  const user = JSON.parse(
    Cookies.get("user") ? (Cookies.get("user") as string) : "{}"
  );

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const blog = { title, thumbnail, description, upload_by: user };

    const { data, error }: any = await createBlog(blog);

    if (data?.success) {
      toast.success(data.message);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } else {
      toast.error("Fail to create");
      logout(router, dispatch);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <div className="w-full flex justify-center items-start py-5 px-2">
          <div className="w-full flex md:flex-row flex-col gap-5 sm:px-2 px-1\">
            <Thumbnail thumbnail={thumbnail} setThumbnail={setThumbnail} />
            <form onSubmit={onSubmitHandler} className="md:w-1/2 w-full">
              <div className="w-full flex flex-col items-start">
                <Input
                  label="Title"
                  placeholder="Blog Title"
                  type="text"
                  value={title}
                  setValue={setTitle}
                />
                <Textarea
                  label="Description"
                  placeholder="Blog Description"
                  value={description}
                  setValue={setDescription}
                />
                <button
                  disabled={isLoading}
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
          focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
           dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center"
                >
                  {isLoading ? (
                    <BiLoaderAlt className="text-base animate-spin" />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </Suspense>
  );
};

export default page;
