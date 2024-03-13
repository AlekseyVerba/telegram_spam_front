export enum BlockSignUpTelegramEnum {
    LOGIN = 'LOGIN',
    SEND_CODE = 'SEND_CODE'
}

export interface SignUpTelegramSchema {
    isLoading: boolean
    phone: string
    phoneCodeHash: string
    phoneCode: string
    block: BlockSignUpTelegramEnum
}