import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nursery-server-three.vercel.app/api",
  }),
  endpoints: () => ({}),
});
