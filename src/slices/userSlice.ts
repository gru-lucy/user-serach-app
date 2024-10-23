import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { User } from "../utils/types/user"
import { arrayToCommaSeparatedString } from "../utils/utils"
import { userColumns } from "../pages/users/const"

interface UsersApiResponse {
  users: User[]
  total: number
  skip: number
}

export const usersApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/users" }),
  reducerPath: "usersApi",
  tagTypes: ["Users"],
  endpoints: build => ({
    getUsers: build.query<UsersApiResponse, { search?: string; limit: number; skip: number }>({
      query: ({ search = "", limit, skip }) => 
        `/search?q=${search}&limit=${limit}&skip=${skip}&select=${arrayToCommaSeparatedString(userColumns)}`,
      providesTags: (result, error, id) => [{ type: "Users", id: 'LIST' }],
    }),
    getUser: build.query<User, string>({
      query: (id) => 
        `/${id}`,
      providesTags: (result, error, id) => 
        result ? [{ type: "Users", id }] : [] 
    })
  }),
})

export const { useGetUsersQuery, useGetUserQuery } = usersApiSlice