import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/c/d583-9e78-49ad-98b4",
  }),
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: () => {
        return "/";
      },
    }),
  }),
});

export const { useFetchBlogsQuery } = blogApi;
