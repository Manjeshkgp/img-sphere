import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL + "auth/",
    credentials: "include",
    mode:"cors",
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: "register",
        method: "POST",
        body: credentials,
      }),
    })
  }),
});

export const { useSignupMutation } = authApi;
