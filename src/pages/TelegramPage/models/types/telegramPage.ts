export interface TelegramPageSchema {
    userTelegram?: Components.Schemas.UserTelegramDTO
    error?: string
    isLoading: boolean
}