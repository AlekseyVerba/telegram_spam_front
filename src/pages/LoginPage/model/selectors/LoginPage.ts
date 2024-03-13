import { StateSchema } from 'app/providers/StoreProvider'

export const getIsLoading = (state: StateSchema) => state.loginPage.isLoading
export const getError = (state: StateSchema) => state.loginPage.error