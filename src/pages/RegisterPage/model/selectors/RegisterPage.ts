import { StateSchema } from 'app/providers/StoreProvider'

export const getIsLoading = (state: StateSchema) => state.registerPage.isLoading
export const getError = (state: StateSchema) => state.registerPage.error
export const getBlock = (state: StateSchema) => state.registerPage.block
export const getSuccessMessage = (state: StateSchema) => state.registerPage.successMessage
export const getEmail = (state: StateSchema) => state.registerPage.email