import { apiSlice } from "../api/apiSlice";

const itemSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getItems: build.query({
            query: () => ({
                url: "/item",
                method: 'GET'
            })
        }),
        getItemDetails: build.query({
            query: (id) => ({
                url: `/item/${id}`,
                method: 'GET'
            })
        }),
        updateItem: build.mutation({
            query: ({ token, id, itemData }) => ({
                url: `/item/${id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: itemData
            })
        })
    })
})

export const { useGetItemsQuery, useGetItemDetailsQuery, useUpdateItemMutation } = itemSlice