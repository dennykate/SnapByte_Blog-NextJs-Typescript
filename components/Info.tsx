import Image from "next/image";
import React from "react";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { HiThumbUp } from "react-icons/hi";

import { CardDataProps, UserInfoProps } from "@/types";
import {
  useDislikeBlogMutation,
  useLikeBlogMutation,
} from "@/redux/api/blogApi";

const Info = ({ data }: { data: CardDataProps }) => {
  const [likeBlog] = useLikeBlogMutation();
  const [dislikeBlog] = useDislikeBlogMutation();

  const { upload_by, created_at, views, likes, slug, isLikedUser } = data;

  const onLikeClickHandler = async () => {
    if (isLikedUser) {
      console.log("dislike");
      await dislikeBlog(slug);
    } else {
      console.log("like");
      await likeBlog(slug);
    }
  };

  return (
    <div className="w-full flex flex-col items-start">
      <div className="w-full flex items-center gap-1 mb-1 justify-between">
        <div className="w-[60%]  flex justify-start">
          <p className="text-[12px] font-[300] truncate text-gray-800  mt-1 ">
            {created_at}
          </p>
        </div>

        <div className="flex items-center justify-end gap-[3px] w-[30%]">
          <div className="min-w-[20px] h-[20px] rounded-full overflow-hidden">
            <Image
              priority
              src={upload_by.profile}
              width={20}
              height={20}
              alt="user-profile"
              className="object-cover"
            />
          </div>
          <p className="text-xs font-bold truncate text-gray-800">
            {upload_by.name}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end w-full gap-4">
        <div className="flex items-center gap-[2px] text-gray-800">
          <AiOutlineEye className=" text-lg " />
          <p className="text-xs font-[400]">{views ? views : 0}</p>
        </div>
        <button
          onClick={onLikeClickHandler}
          className="flex items-center gap-[2px] text-gray-800 cursor-pointer group "
        >
          {isLikedUser ? (
            <HiThumbUp className=" text-base  text-blue-700" />
          ) : (
            <BiLike className=" text-base group-hover:animate-none animate-bounce group-hover:text-blue-700" />
          )}
          <p className="text-xs font-[400]">{likes ? likes : 0}</p>
        </button>
      </div>
    </div>
  );
};

export default Info;
