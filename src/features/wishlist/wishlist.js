import { apiSlice } from "../api/apiSlice";

const wishlistSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getWishlists: build.query({
            query: (token) => ({
                url: "/wishlist",
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            providesTags: ["Wishlist"]
        }),
        postWishlist: build.mutation({
            query: ({ token, foodId }) => ({
                url: `/wishlist/${foodId}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ["Wishlist"]
        }),
        deleteWishlist: build.mutation({
            query: ({ foodId, token }) => ({
                url: `/wishlist/${foodId}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ["Wishlist"]
        }),
    })
})

export const { useGetWishlistsQuery, usePostWishlistMutation, useDeleteWishlistMutation } = wishlistSlice