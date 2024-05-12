import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/BASE_URL";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth`,
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/sign-in",
        method: "POST",
        body,
      }),
    }),
    changePassword: builder.mutation({
      query: (body) => ({
        url: "/reset-password",
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useUpdateUsernameMutation,
  useChangePasswordMutation,
} = authApi as any;
