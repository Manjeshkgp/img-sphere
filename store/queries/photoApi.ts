import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const photoApi = createApi({
  reducerPath: "photoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_PIXABAY_URL,
    credentials: "same-origin",
    mode:"cors",
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: (data) => ({
        url: `?key${data?.pixabayAPIKey}&q=${encodeURI(data?.search)}&image_type=photo`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPhotosQuery } = photoApi;
