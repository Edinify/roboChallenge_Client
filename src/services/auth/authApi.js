import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiRoot } from "../../apiRoot/apiRoot";
import { logoutUser, setUserToken } from "./LoginSlice";

const getToken = () => localStorage.getItem("auth");

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiRoot}/user/auth/`,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (user) => ({
        method: "POST",
        url: "login",
        body: user,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;

          console.log(data, "dataaa");

          localStorage.setItem("auth", data.AccessToken);
          dispatch(setUserToken(data));
        } catch (error) {
          console.error("Login error:", error);
        }
      },
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        method: "POST",
        body: user,
        url: "student/sign",
      }),
    }),
    getUser: builder.query({
      query: () => ({
        method: "GET",
        url: "/",
      }),
      providesTags: ["user"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.log(error.error, "errorrrrrrrrrrrrrrrrr");
          if (error?.error?.originalStatus === 401) {
            const token = localStorage.getItem("auth");
            if (token) {
              dispatch(logoutUser());
            }
          }
        }
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetUserQuery,
} = authApi;
