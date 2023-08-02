"use client";

import { Layout, DetailContainer, RelatedBlogs } from "@/components";
import { useGetBlogBySlugQuery } from "@/redux/api/blogApi";

const Page = ({ params }: { params: { slug: string } }) => {
  const { data, error, isLoading } = useGetBlogBySlugQuery(params.slug);

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
