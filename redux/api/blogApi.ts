import Cookies from "js-cookie";

import config from "@/constants/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.baseUrl + "/blogs" }),
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => {
        const token = Cookies.get("token");

        return {
          url: "/",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["Blog"],
    }),
    getBlogBySlug: builder.query({
      query: (slug) => {
        const token = Cookies.get("token");

        return {
          url: `/detail/${slug}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["Blog"],
    }),
    getBlogByUser: builder.query({
      query: (id) => {
        const token = Cookies.get("token");

        return {
          url: `/profile/${id}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["Blog"],
    }),
    getRelatedBlogs: builder.query({
      query: () => {
        const token = Cookies.get("token");

        return {
          url: "/related",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["Blog"],
    }),
    createBlog: builder.mutation({
      query: (data) => {
        const token = Cookies.get("token");

        return {
          url: "/",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: data,
        };
      },
      invalidatesTags: ["Blog"],
    }),
    likeBlog: builder.mutation({
      query: (slug) => {
        const token = Cookies.get("token");

        return {
          url: "/like",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: {
            slug,
          },
        };
      },
      invalidatesTags: ["Blog"],
    }),
    dislikeBlog: builder.mutation({
      query: (slug) => {
        const token = Cookies.get("token");

        return {
          url: "/dislike",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: {
            slug,
          },
        };
      },
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogByUserQuery,
  useCreateBlogMutation,
  useGetBlogBySlugQuery,
  useGetRelatedBlogsQuery,
  useLikeBlogMutation,
  useDislikeBlogMutation,
} = blogApi;
