import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const URL = "http://localhost:5000/api"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({

    }),
    tagTypes: ["Cart"]
})