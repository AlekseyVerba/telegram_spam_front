import { createSlice } from '@reduxjs/toolkit'
import { LoginPageSchema } from '../types/loginPageSchema'
import { loginByEmail } from '../services/loginByEmail/loginByEmail'
import { act } from 'react-dom/test-utils'


const initialState: LoginPageSchema = {
    error: undefined,
    isLoading: false,
}

const loginPageSlice = createSlice({
    name: 'loginPage',
    initialState,
    reducers: {
        setInitial: (state) => {
            state = {...initialState}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByEmail.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByEmail.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(loginByEmail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload?.message
            })
    },
})

export const { actions: loginPageActions } = loginPageSlice
export const { reducer: loginPageReducer } = loginPageSlice
