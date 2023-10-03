"use client";

import Cookies from "js-cookie";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2";

import { CardDataProps } from "@/types";
import { deleteAlert, truncateText } from "@/utils";
import { Info } from ".";
import { useDeleteBlogMutation } from "@/redux/api/blogApi";

const Card = ({ data }: { data: CardDataProps }) => {
  const { thumbnail, title, description, slug, upload_by } = data;
  const user = JSON.parse(Cookies.get("user") || "{}");
  const pathName = usePathname();

  const [deleteBlog] = useDeleteBlogMutation();

  const router = useRouter();

  const onClickHandler = () => {
    router.push(`/detail/${slug}`);
  };

  const onDeleteHandler = () => {
    deleteAlert(async () => await deleteBlog(slug));
  };

  const isAuthorizedAndValidPage = () => {
    return upload_by?.id == user?.id && pathName.includes("/profile");
  };

  return (
    <div className=" bg-white border border-gray-200 overflow-hidden   ">
      <div className="md:h-[140px] h-[160px] overflow-hidden ">
        <Image
          src={thumbnail}
          width={1280}
          height={580}
          alt="thumbnail"
          className="w-full h-full object-cover"
        />
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
          <div className="flex justify-between items-center w-full ">
            <button
              onClick={onClickHandler}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </button>

            {isAuthorizedAndValidPage() && (
              <button
                onClick={onDeleteHandler}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center 
          bg-red-500 text-white rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
