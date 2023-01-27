import { apiSlice } from "../api/apiSlice";

const orderSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getOrders: build.query({
            query: () => ({
                url: "/order",
                method: 'GET'
            })
        }),
        createOrder: build.mutation({
            query: ({ token, orderData }) => ({
                url: '/order',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: orderData
            })
        })
    })
})

export const { useGetOrdersQuery, useCreateOrderMutation } = orderSlice