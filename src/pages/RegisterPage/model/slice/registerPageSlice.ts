import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RegisterPageSchema, BlockRegisterEnum } from '../types/RegisterPageSchema'
import { register } from '../services/register/register'
import { confirmCode } from '../services/confirmCode/confirmCode'


const initialState: RegisterPageSchema = {
    email: '',
    error: undefined,
    errorConfirm: undefined,
    isLoading: false,
    successMessage: undefined,
    block: BlockRegisterEnum.REGISTER
}

const registerPageSlice = createSlice({
    name: 'registerPage',
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
        builder
            .addCase(register.pending, (state) => {
                state.error = undefined
                state.isLoading = true
                state.successMessage = undefined
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.successMessage = action.payload.registrationMessage
                state.block = BlockRegisterEnum.CONFIRM_CODE
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload?.message
            })

            .addCase(confirmCode.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(confirmCode.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(confirmCode.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload?.message
            })
    },
})

export const { actions: registerPageActions } = registerPageSlice
export const { reducer: registerPageReducer } = registerPageSlice
