import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import { authApi } from "../services/authApi";
import { profileApi } from "../services/profileApi";
import { productApi } from "../services/productsApi";

export const store = configureStore({
  //All the reducers irrespective of redux or RTK has to be register here
  reducer: {
    auth: authSlice, //This reducer is to set credentials & consume state in application
    [authApi.reducerPath]: authApi.reducer, // this reducer has auth header & endpoints
    [profileApi.reducerPath]: profileApi.reducer, // this reducer has auth header & get user details endpoint
    [productApi.reducerPath]: productApi.reducer, // this reducer has auth header & get products endpoint
  },
  //Registering custom middleware along with default/existing middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      profileApi.middleware,
      productApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
