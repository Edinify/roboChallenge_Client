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

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiRoot}/news/`,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: () => ({
        method: "GET",
        url: "/all",
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        await handleQueryFulfilled(queryFulfilled);
      },
      providesTags: ["news"],
    }),

    createNews: builder.mutation({
      query: (newsNews) => ({
        method: "POST",
        url: "",
        body: newsNews,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        await handleQueryFulfilled(queryFulfilled);
      },
      invalidatesTags: ["news"],
    }),
    updateNews: builder.mutation({
      query: ({ id, ...newsNews }) => ({
        method: "PATCH",
        url: `/${id}`,
        body: newsNews,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        await handleQueryFulfilled(queryFulfilled);
      },
      invalidatesTags: ["news"],
    }),
    deleteNews: builder.mutation({
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
  useGetAllNewsQuery,
  useCreateNewsMutation,
  useDeleteNewsMutation,
  useUpdateNewsMutation,
} = newsApi;
