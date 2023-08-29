"use client";

import { CardContainer, Layout } from "@/components";
import { useGetBlogsQuery } from "@/redux/api/blogApi";
import { Suspense } from "react";
import Loading from "./loading";
import Head from "next/head";

export default function Home() {
  const { data, error, isLoading } = useGetBlogsQuery(null);

  console.log(error);

  return (
    <Suspense fallback={<Loading />}>
      <Head>
        <title>Blogs</title>
      </Head>
      <Layout>
        <CardContainer data={data?.data} loading={isLoading} />
      </Layout>
    </Suspense>
  );
}
