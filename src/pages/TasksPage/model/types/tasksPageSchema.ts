import { Task } from "entities/Task"

export interface TasksPageSchema {
    tasks: Task[]
    isLoading: boolean
    error?: string
}
