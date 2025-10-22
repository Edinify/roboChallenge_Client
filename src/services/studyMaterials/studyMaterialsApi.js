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

export const studyMaterialApi = createApi({
  reducerPath: "studyMaterial",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiRoot}/study-material/`,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getStudyMaterials: builder.query({
      query: () => ({
        method: "GET",
        url: "/all",
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        await handleQueryFulfilled(queryFulfilled);
      },
      providesTags: ["exams"],
    }),
    createStudyMaterial: builder.mutation({
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

    deleteStudyMaterial: builder.mutation({
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
  useCreateStudyMaterialMutation,
  useDeleteStudyMaterialMutation,
  useGetStudyMaterialsQuery,
} = studyMaterialApi;
