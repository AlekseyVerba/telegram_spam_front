import { ForgotPasswordSchema } from './model/types/ForgotPasswordSchema'

export { RegisterPageAsync as RegisterPage } from './ui/ForgotPasswordPageAsync'
export { forgotPasswordPageActions, forgotPasswordReducer } from './model/slice/forgotPasswordPageSlice'
export { BlockForgotPasswordEnum } from './model/types/ForgotPasswordSchema'
export type {ForgotPasswordSchema}