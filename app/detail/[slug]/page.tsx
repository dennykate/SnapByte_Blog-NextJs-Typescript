"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { Layout, DetailContainer, RelatedBlogs } from "@/components";
import { useGetBlogBySlugQuery } from "@/redux/api/blogApi";
import { logout } from "@/utils";

const Page = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetBlogBySlugQuery(params.slug);

  if (error) {
    logout(router, dispatch);
  }

  return (
    <Layout>
      {data ? (
        <div className="py-5 flex items-start gap-5">
          <DetailContainer data={data.data} />
          <RelatedBlogs />
        </div>
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default Page;
