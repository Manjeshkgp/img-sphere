import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/store/store";

export const photoApi = createApi({
  reducerPath: "photoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL + "photos/",
    credentials: "include",
    mode:"cors",
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: (data) => ({
        url: `?q=${data?.search}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPhotosQuery } = photoApi;
