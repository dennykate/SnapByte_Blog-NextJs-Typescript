"use client";

import { CardContainer, Layout } from "@/components";
import { useGetBlogsQuery } from "@/redux/api/blogApi";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  const { data, error, isLoading } = useGetBlogsQuery(null);



  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <CardContainer data={data?.data} loading={isLoading} />
      </Layout>
    </Suspense>
  );
}
