import { apiSlice } from "../api/apiSlice";

const reviewSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getReviews: build.query({
            query: ({foodId}) => ({
                url: `/review?foodId=${foodId}`,
                method: 'GET'
            }),
            providesTags: ["Review"]
        }),
        postReview: build.mutation({
            query: ({ token, reviewData }) => ({
                url: '/review',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: reviewData
            }),
            invalidatesTags: ["Review"]
        }),
        updateReview: build.mutation({
            query: ({ id, reviewData, token }) => ({
                url: `/review/${id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: reviewData
            }),
            invalidatesTags: ["Review"]
        }),
        deleteReview: build.mutation({
            query: ({ id, token }) => ({
                url: `/review/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ["Review"]
        }),
    })
})

export const { useGetReviewsQuery, usePostReviewMutation, useUpdateReviewMutation, useDeleteReviewMutation } = reviewSlice