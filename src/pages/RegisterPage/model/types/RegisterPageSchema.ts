export enum BlockRegisterEnum {
    REGISTER = 'REGISTER',
    CONFIRM_CODE = 'CONFIRM_CODE'
}

export interface RegisterPageSchema {
    email: string
    isLoading: boolean
    error?: string
    errorConfirm?: string
    successMessage?: string
    block: BlockRegisterEnum
}
