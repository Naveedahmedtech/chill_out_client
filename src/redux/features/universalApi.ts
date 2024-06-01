import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL_ } from "../../utils/BASE_URL";

export const universalApi = createApi({
  reducerPath: "universalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL_}/universal`,
    prepareHeaders: (headers) => {
      headers.set("x-api-key", "secret-api-key");
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    fetchCsrfToken: builder.query<{ csrfToken: string }, void>({
      query: () => ({
        url: "/csrf-token",
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchCsrfTokenQuery } = universalApi;
