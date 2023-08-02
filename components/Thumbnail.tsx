import Image from "next/image";
import React from "react";

import { ThumbnailType } from "@/types";
import { uploadImage } from "@/utils";

const Thumbnail = ({ thumbnail, setThumbnail }: ThumbnailType) => {
  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const url = await uploadImage(e.target.files[0]);

      if (url) {
        setThumbnail(url);
      }
    }
  };

  return (
    <div className="w-1/2">
      <div className="w-full min-h-[300px] flex-1 border-[1px] border-black border-dashed p-3 ">
        {thumbnail == "" ? (
          <label htmlFor="thumbnail">
            <div className="w-full min-h-[280px] bg-gray-200 flex flex-col justify-center items-center cursor-pointer relative">
              <h1 className="text-2xl font-bold text-black text-center">
                Click here to add blog's thumbnail
              </h1>
              <input
                onChange={onChangeHandler}
                type="file"
                id="thumbnail"
                className="opacity-0 absolute"
              />
            </div>
          </label>
        ) : (
          <div className="w-full h-full ">
            <Image width={1280} height={1280} alt="thumbnail" src={thumbnail} />
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-col items-start gap-1">
        <h6 className="text-sm font-[500] text-red-500">
          &#xb7; file type must be png or jpeg
        </h6>
        <h6 className="text-sm font-[500] text-red-500">
          &#xb7; file size must be less than 1MB
        </h6>
      </div>
    </div>
  );
};

export default Thumbnail;
