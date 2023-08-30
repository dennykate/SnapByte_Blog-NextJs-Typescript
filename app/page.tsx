"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";

import { CardContainer, Layout } from "@/components";
import { useGetBlogsQuery } from "@/redux/api/blogApi";
import Loading from "./loading";

export default function Page() {
  const router = useRouter();
  const { data, error, isLoading } = useGetBlogsQuery(null);

  if (error) {
    router.push("/login");
  }

  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <CardContainer data={data?.data} loading={isLoading} />
      </Layout>
    </Suspense>
  );
}
