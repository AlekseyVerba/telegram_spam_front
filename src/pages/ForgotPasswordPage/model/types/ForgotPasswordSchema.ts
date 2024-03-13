export enum BlockForgotPasswordEnum {
    FORGOT_PASSWORD = 'FORGOT_PASSWORD',
    CONFIRM_CODE = 'CONFIRM_CODE'
}

export interface ForgotPasswordSchema {
    email: string,
    error?: string,
    errorConfirm?: string,
    isLoading: boolean,
    successMessage?: undefined,
    block: BlockForgotPasswordEnum
}