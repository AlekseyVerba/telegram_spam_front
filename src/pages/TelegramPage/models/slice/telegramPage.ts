import { createSlice } from '@reduxjs/toolkit'
import { TelegramPageSchema } from '../types/telegramPage'
import { getTelegramUser } from '../services/getTelegramUser'


const initialState: TelegramPageSchema = {
    isLoading: false
}

const telegramPageSlice = createSlice({
    name: 'telegramPage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTelegramUser.pending, (state) => {
                state.isLoading = true
                state.error = undefined
                state.userTelegram = undefined
            })
            .addCase(getTelegramUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.userTelegram = action.payload
            })
            .addCase(getTelegramUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload?.message
            })
        
    },
})

export const { actions: telegramPageActions } = telegramPageSlice
export const { reducer: telegramPageReducer } = telegramPageSlice
