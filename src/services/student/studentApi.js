import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiRoot } from "../../apiRoot/apiRoot";

const getToken = () => localStorage.getItem("auth");

const handleQueryFulfilled = async (queryFulfilled) => {
  try {
    const { data } = await queryFulfilled;
    if (data?.AccessToken) {
      localStorage.setItem("auth", data.AccessToken);
    }
  } catch (error) {
    console.error("Query error:", error);
  }
};

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiRoot}/user/student`,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    updateStudent: builder.mutation({
      query: ({ id, ...newStudent }) => ({
        method: "PATCH",
        url: `/${id}`,
        body: newStudent,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        await handleQueryFulfilled(queryFulfilled);
      },
      invalidatesTags: ["student"],
    }),
    updateStudentPassword: builder.mutation({
      query: ({ oldPassword, newPassword }) => ({
        method: "PATCH",
        url: "/own/password",
        body: { oldPassword, newPassword },
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        await handleQueryFulfilled(queryFulfilled);
      },
    }),
    deleteStudent: builder.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/${id}`,
        };
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        await handleQueryFulfilled(queryFulfilled);
      },
      invalidatesTags: ["news"],
    }),
  }),
});

export const {
  useDeleteStudentMutation,
  useUpdateStudentMutation,
  useUpdateStudentPasswordMutation,
} = studentApi;
