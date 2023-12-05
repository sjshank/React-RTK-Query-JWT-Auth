import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authHeader } from "./authHeader";

//Building api for authentication
export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery(authHeader()),
  //building the endpoints
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "auth/profile",
      keepUnusedDataFor: 5,
    }),
  }),
});

//Auto generated hook - starts with use & ends on query
export const { useGetProfileQuery } = profileApi;
