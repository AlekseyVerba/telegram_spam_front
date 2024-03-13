import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { BlockSignUpTelegramEnum, SignUpTelegramSchema } from '../types/signUpTelegram'
import { sendTelegramCode } from '../services/sendTelegramCode'
import { loginTelegram } from '../services/loginTelegram'

const initialState: SignUpTelegramSchema = {
    isLoading: false,
    phone: '',
    phoneCode: '',
    phoneCodeHash: '',
    block: BlockSignUpTelegramEnum.SEND_CODE
}

const signUpTelegramSlice = createSlice({
    name: 'signUpTelegram',
    initialState,
    reducers: {
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload
        },
        setPhoneCode: (state, action: PayloadAction<string>) => {
            state.phoneCode = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendTelegramCode.pending, (state) => {
                state.isLoading = true
                state.phoneCode = ''
                state.phoneCodeHash = ''
            })
            .addCase(sendTelegramCode.fulfilled, (state, action) => {
                state.isLoading = false
                state.phoneCodeHash = action.payload.phoneCodeHash
                state.block = BlockSignUpTelegramEnum.LOGIN
            })
            .addCase(sendTelegramCode.rejected, (state, action) => {
                state.isLoading = false
                state.phone = ''
            })

            .addCase(loginTelegram.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginTelegram.fulfilled, (state, action) => {
                state.isLoading = false
                console.log(action.payload)
            })
            .addCase(loginTelegram.rejected, (state, action) => {
                state.isLoading = false
            })
    },
})

export const { actions: signUpTelegramActions } = signUpTelegramSlice
export const { reducer: signUpTelegramReducer } = signUpTelegramSlice
