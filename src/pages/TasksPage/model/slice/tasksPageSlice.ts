import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TasksPageSchema } from '../types/tasksPageSchema'
import { fetchTasks } from '../services/fetchTasks'


const initialState: TasksPageSchema = {
    tasks: [],
    error: undefined,
    isLoading: false,
}

const tasksPageSlice = createSlice({
    name: 'tasksPage',
    initialState,
    reducers: {
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.isLoading = false
                state.tasks = action.payload
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload?.message
            })
    },
})

export const { actions: tasksPageActions } = tasksPageSlice
export const { reducer: tasksPageReducer } = tasksPageSlice
