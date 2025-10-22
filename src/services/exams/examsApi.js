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

export const examApi = createApi({
  reducerPath: "examApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiRoot}/exam/`,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllExams: builder.query({
      query: () => ({
        method: "GET",
        url: "/all",
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        await handleQueryFulfilled(queryFulfilled);
      },
      providesTags: ["exams"],
    }),
    getExamById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/${id}`,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        await handleQueryFulfilled(queryFulfilled);
      },
      providesTags: ["exams"],
    }),
    createExam: builder.mutation({
      query: (newExam) => ({
        method: "POST",
        url: "",
        body: newExam,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        await handleQueryFulfilled(queryFulfilled);
      },
      invalidatesTags: ["exams"],
    }),
    updateExam: builder.mutation({
      query: ({ id, ...newExam }) => ({
        method: "PATCH",
        url: `/${id}`,
        body: newExam,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        await handleQueryFulfilled(queryFulfilled);
      },
      invalidatesTags: ["exams"],
    }),
    deleteExam: builder.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `${id}`,
        };
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        await handleQueryFulfilled(queryFulfilled);
      },
      invalidatesTags: ["exams"],
    }),
  }),
});

export const {
  useGetAllExamsQuery,
  useCreateExamMutation,
  useDeleteExamMutation,
  useGetExamByIdQuery,
  useUpdateExamMutation,
} = examApi;
