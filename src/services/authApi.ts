import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authHeader } from "./authHeader";


//Building api for authentication
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery(authHeader()),
  //building the endpoints
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

//Auto generated hook - starts with use & ends on mutation
export const { useLoginMutation } = authApi;
