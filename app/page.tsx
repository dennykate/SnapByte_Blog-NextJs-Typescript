"use client";

import { CardContainer, Layout } from "@/components";
import { useGetBlogsQuery } from "@/redux/api/blogApi";

export default function Home() {
  const { data, error, isLoading } = useGetBlogsQuery(null);

  console.log(data);

  return (
    <Layout>
      <CardContainer data={data?.data} />
    </Layout>
  );
}
