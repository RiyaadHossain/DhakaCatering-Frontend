import { createSlice } from "@reduxjs/toolkit"

const initialState = { user: {} }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userPersistencyReducer: (state, { payload }) => {
            console.log(payload);
            state.user = payload
        }
    }
})

export const { userPersistencyReducer } = authSlice.actions
export default authSlice.reducer