"use client";

import React from "react";

import { CardContainer, Layout, ProfileHead } from "@/components";
import { useGetBlogByUserQuery } from "@/redux/api/blogApi";
import Image from "next/image";
import Loading from "./loading";

const page = ({ params: { id } }: { params: { id: string } }) => {
  const { data, error, isLoading } = useGetBlogByUserQuery(id);

  return (
    <>
      {!isLoading ? (
        <Layout profile>
          <div className="w-full">
            <div className="w-full h-[200px] overflow-hidden">
              <Image
                priority
                alt="cover-photo"
                width={1024}
                height={512}
                src={"https://source.unsplash.com/random"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full -translate-y-[50px]">
              <ProfileHead />

              <CardContainer data={data?.data} loading={isLoading} />
            </div>
          </div>
        </Layout>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default page;
