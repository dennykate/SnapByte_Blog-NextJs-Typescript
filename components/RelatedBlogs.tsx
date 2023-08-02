"use client";

import { useGetRelatedBlogsQuery } from "@/redux/api/blogApi";
import React from "react";
import Card from "./Card";
import { CardDataProps } from "@/types";

const RelatedBlogs = () => {
  const { data, error, isLoading } = useGetRelatedBlogsQuery(null);
  console.log(data);

  return (
    <div className="w-[35%] sticky top-3 grid grid-cols-1 gap-2">
      {data?.data.map((blog: CardDataProps, i: number) => (
        <Card key={i} data={blog} />
      ))}
    </div>
  );
};

export default RelatedBlogs;
