import { StateSchema } from 'app/providers/StoreProvider'

export const getBlock = (state: StateSchema) => state.signUpTelegram.block
export const getIsLoading = (state: StateSchema) => state.signUpTelegram.isLoading
export const getPhone = (state: StateSchema) => state.signUpTelegram.phone
export const getPhoneCode = (state:StateSchema) => state.signUpTelegram.phoneCode
export const getPhoneCodeHash = (state: StateSchema) => state.signUpTelegram.phoneCodeHash