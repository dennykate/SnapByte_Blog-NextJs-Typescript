"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { CardContainer, Layout } from "@/components";
import { useGetBlogsQuery } from "@/redux/api/blogApi";
import Loading from "./loading";
import { logout } from "@/utils";

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetBlogsQuery(null);

  if (error && !isLoading) {
    logout(router, dispatch);
  }

  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <CardContainer data={data?.data} loading={isLoading} />
      </Layout>
    </Suspense>
  );
}
