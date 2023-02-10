import { apiSlice } from "../api/apiSlice";

const galleryAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getGallery: build.query({
            query: () => ({
                url: "/gallery",
                method: 'GET'
            })
        }),
    })
})

export const { useGetGalleryQuery } = galleryAPI