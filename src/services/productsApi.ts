import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authHeader } from "./authHeader";

//Building api for authentication
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery(authHeader()),
  //building the endpoints
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      keepUnusedDataFor: 5,
    }),
  }),
});

//Auto generated hook - starts with use & ends on query
export const { useGetProductsQuery } = productApi;
