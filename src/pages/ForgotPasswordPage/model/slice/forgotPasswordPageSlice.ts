import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ForgotPasswordSchema, BlockForgotPasswordEnum } from '../types/ForgotPasswordSchema'


const initialState: ForgotPasswordSchema = {
    email: '',
    error: undefined,
    errorConfirm: undefined,
    isLoading: false,
    successMessage: undefined,
    block: BlockForgotPasswordEnum.FORGOT_PASSWORD
}

const forgotPasswordPageSlice = createSlice({
    name: 'forgotPasswordPage',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setInitial: (state) => {
            state = {...initialState}
        }
    },
    extraReducers: (builder) => {
    },
})

export const { actions: forgotPasswordPageActions } = forgotPasswordPageSlice
export const { reducer: forgotPasswordReducer } = forgotPasswordPageSlice
