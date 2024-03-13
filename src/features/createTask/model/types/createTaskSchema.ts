import { HttpError } from "types"

export interface CreateTaskSchema {
    nameInput: string
    cronInput: string
    channelsInputs: string[]
    messageInput: string
    imageInput: File | null
    isActiveInput: boolean
    message?: string
    isLoading: boolean
    error?: HttpError
}