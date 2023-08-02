import React from "react";

import { CardDataProps } from "@/types";
import Image from "next/image";
import { Info } from ".";

const DetailContainer = ({ data }: { data: CardDataProps }) => {
  const { thumbnail, title, description } = data;

  return (
    <div className="w-[65%]">
      <div className="h-auto overflow-hidden mb-5">
        <Image
          width={1280}
          height={720}
          src={thumbnail}
          alt={title}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-start gap-3 mb-8">
        <h6 className="text-3xl font-semibold text-black">{title}</h6>
        <Info data={data} />

        <p className="text-base text-gray-800 indent-16 leading-8">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DetailContainer;
