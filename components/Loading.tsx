import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex items-center gap-2">
        <AiOutlineLoading3Quarters className="text-xl animate-spin" />
        <h1 className="text-xl font-bold text-black">Loading ...</h1>
      </div>
    </div>
  );
};

export default Loading;
