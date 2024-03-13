import { StateSchema } from 'app/providers/StoreProvider'

export const getCurrentTask = (state: StateSchema) => state.updateTask.task
export const getImageInput = (state: StateSchema) => state.updateTask.imageInput
export const getMessage = (state: StateSchema) => state.updateTask.message
export const getIsLoading = (state: StateSchema) => state.updateTask.isLoading