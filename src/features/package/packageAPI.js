import { apiSlice } from "../api/apiSlice";

const packageSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getPackages: build.query({
            query: () => ({
                url: "/package",
                method: 'GET'
            })
        }),
        getPackageDetails: build.query({
            query: (id) => ({
                url: `/package/${id}`,
                method: 'GET'
            })
        }),
        updatePackage: build.mutation({
            query: ({ token, id, packageData }) => ({
                url: `/package/${id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: packageData
            })
        }),
        updateViewSell: build.mutation({
            query: ({ packageData }) => ({
                url: `/package`,
                method: 'PATCH',
                body: packageData
            })
        })
    })
})

export const { useGetPackagesQuery, useGetPackageDetailsQuery, useUpdatePackageMutation, useUpdateViewSellMutation } = packageSlice