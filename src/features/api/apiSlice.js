import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const URL = "https://dhaka-catering-backend.vercel.app/api"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({

    }),
    tagTypes: ["Wishlist", "Review"]
})