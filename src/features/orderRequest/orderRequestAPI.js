import { apiSlice } from "../api/apiSlice";

const orderRequestSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getOrderRequests: build.query({
            query: (id) => ({
                url: `/order-request?userId=${id}`,
                method: 'GET'
            })
        }),

        createOrderRequest: build.mutation({
            query: ({ token, orderRequestData }) => ({
                url: '/order-request',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: orderRequestData
            })
        })
    })
})

export const { useGetOrderRequestsQuery, useCreateOrderRequestMutation } = orderRequestSlice