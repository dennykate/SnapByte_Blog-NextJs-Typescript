"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { CardDataProps } from "@/types";
import { truncateText } from "@/utils";
import { Info } from ".";

const Card = ({ data }: { data: CardDataProps }) => {
  const {
    thumbnail,
    title,
    description,
    slug,
  } = data;

  const router = useRouter();

  const onClickHandler = () => {
    router.push(`/detail/${slug}`);
  };

  return (
    <div className=" bg-white border border-gray-200 overflow-hidden   ">
      <div className="h-[140px] overflow-hidden ">
        <Image src={thumbnail} width={1280} height={580} alt="thumbnail" />
      </div>

      <div className="py-5 px-3">
        <Info data={data} />

        <div className="flex flex-col justify-between items-start mt-2 min-h-[150px]">
          <div className="flex flex-col items-start">
            <a href="#">
              <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 ">
                {truncateText(title, 40)}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 text-sm dark:text-gray-400 text-start">
              {truncateText(description, 120)}
            </p>
          </div>
          <button
            onClick={onClickHandler}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
