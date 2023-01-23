import { apiSlice } from "../api/apiSlice";

const authSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        userPersistency: build.query({
            query: (token) => ({
                url: "/auth/userPersistency",
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        }),
        userSignUp: build.mutation({
            query: (data) => ({
                url: '/auth/signup',
                method: 'POST',
                body: data
            })
        }),
        userSignIn: build.mutation({
            query: (data) => ({
                url: '/auth/signin',
                method: 'POST',
                body: data
            })
        }),
    })
})

export const { useUserPersistencyQuery, useUserSignUpMutation, useUserSignInMutation } = authSlice