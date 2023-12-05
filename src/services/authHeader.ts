import { RootState } from "../store";

export const authHeader = () : any => {
  return {
    baseUrl: "https://api.escuelajs.co/api/v1/",
    credentials: "omit", //it will bypass CORS
    prepareHeaders: (headers: Headers, { getState }: any) => {
      const token = (getState() as RootState).auth.access_token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  };
};
