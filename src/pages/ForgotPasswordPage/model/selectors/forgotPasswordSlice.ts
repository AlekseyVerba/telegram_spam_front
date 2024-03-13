import { StateSchema } from 'app/providers/StoreProvider'

export const getIsLoading = (state: StateSchema) => state.forgotPasswordPage.isLoading
export const getError = (state: StateSchema) => state.forgotPasswordPage.error
export const getBlock = (state: StateSchema) => state.forgotPasswordPage.block
export const getSuccessMessage = (state: StateSchema) => state.forgotPasswordPage.successMessage
export const getEmail = (state: StateSchema) => state.forgotPasswordPage.email