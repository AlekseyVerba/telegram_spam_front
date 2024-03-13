import { StateSchema } from 'app/providers/StoreProvider'

export const getIsLoading = (state: StateSchema) => state.telegramPage.isLoading
export const getUserTelegram = (state: StateSchema) => state.telegramPage.userTelegram