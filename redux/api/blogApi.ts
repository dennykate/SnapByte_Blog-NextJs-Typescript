import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/blog/" }),
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/",
      providesTags: ["Blog"],
    }),
    getBlogBySlug: builder.query({
      query: (slug) => `/detail/${slug}`,
      providesTags: ["Blog"],
    }),
    getRelatedBlogs: builder.query({
      query: () => "/related",
      providesTags: ["Blog"],
    }),
    createBlog: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Blog"],
    }),
    likeBlog: builder.mutation({
      query: (data) => ({
        url: "/like",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useCreateBlogMutation,
  useGetBlogBySlugQuery,
  useGetRelatedBlogsQuery,
  useLikeBlogMutation
} = blogApi;
