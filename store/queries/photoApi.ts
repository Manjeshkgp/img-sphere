import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/store/store";

export const photoApi = createApi({
  reducerPath: "photoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL + "photos/",
    credentials: "include",
    mode:"cors",
    prepareHeaders:(headers,{getState})=>{
      const jwt = (getState() as RootState)?.auth?.jwt;
      if(jwt){
        headers.set("Authorization",jwt)
      }
    }
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
