import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRegistrationData } from "../reducers/authSlice";

type IRegisterInput = {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  mobile: string;
  email: string;
};

export const authApi = createApi({
  reducerPath: "api",
  tagTypes: ["auth"],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL! }),
  endpoints: (builder) => ({
    // login
    login: builder.mutation({
      query: (email: string) => ({
        url: "auth/login",
        method: "POST",
        body: email,
      }),
    }),

    // register
    register: builder.mutation({
      query: (data: IRegisterInput) => ({
        url: "auth/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
