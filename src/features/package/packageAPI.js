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
    })
})

export const { useGetPackagesQuery, useGetPackageDetailsQuery } = packageSlice