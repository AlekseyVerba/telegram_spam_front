import { StateSchema } from "app/providers/StoreProvider";

export const getTasks = (state: StateSchema) => state.tasksPage.tasks
export const getIsLoading = (state: StateSchema) => state.tasksPage.isLoading
export const getError = (state: StateSchema) => state.tasksPage.error