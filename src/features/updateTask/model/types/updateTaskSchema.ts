import { Task } from "entities/Task"
import { HttpError } from "types"

export interface UpdateTaskSchema {
    task?: Task
    imageInput?: File | null
    // nameInput: string
    // cronInput: string
    // channelsInputs: string[]
    // messageInput: string
    // imageInput: File | null
    // image?: string
    // isActiveInput: boolean
    message?: string
    isLoading: boolean
    error?: HttpError
}