import { StateSchema } from 'app/providers/StoreProvider'

export const getNameInput = (state: StateSchema) => state.createTask.nameInput
export const getCronInput = (state: StateSchema) => state.createTask.cronInput
export const getChannelsInputs = (state: StateSchema) => state.createTask.channelsInputs
export const getImageInput = (state: StateSchema) => state.createTask.imageInput
export const getIsActiveInput = (state: StateSchema) => state.createTask.isActiveInput
export const getMessageInput = (state: StateSchema) => state.createTask.messageInput
export const getMessage = (state: StateSchema) => state.createTask.message
export const getIsLoading = (state: StateSchema) => state.createTask.isLoading