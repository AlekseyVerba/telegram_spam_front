import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { UpdateTaskSchema } from '../types/updateTaskSchema'
import { Task } from 'entities/Task'

const initialState: UpdateTaskSchema = {
    isLoading: false,
}

const updateTaskSlice = createSlice({
    name: 'updateTask',
    initialState,
    reducers: {
        setNameInput: (state, action: PayloadAction<string>) => {
            state.task!.name = action.payload
        },
        setCronInput: (state, action: PayloadAction<string>) => {
            state.task!.cron = action.payload
        },
        setChannelsInputs: (state, action: PayloadAction<string[]>) => {
            state.task!.chats = action.payload
        },
        setImageInput: (state, action: PayloadAction<File | null>) => {
            state.imageInput = action.payload
        },
        setIsActiveInput: (state) => {
            state.task!.is_active = !state.task!.is_active
        },
        setMessageInput: (state, action: PayloadAction<string>) => {
            state.task!.message = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setTask: (state, action: PayloadAction<Task>) => {
            state.task = action.payload
        },
        setImage: (state, action: PayloadAction<string | null>) => {
            state.task!.file  = action.payload
        }
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(createTask.pending, (state) => {
        //         state.isLoading = true
        //         state.error = undefined
        //         state.message = undefined
        //     })
        //     .addCase(createTask.fulfilled, (state, action) => {
        //         state.channelsInputs = ['']
        //         state.cronInput = ''
        //         state.imageInput = null
        //         state.nameInput = ''
        //         state.messageInput = ''

        //         state.message = 'Good'

        //         state.isLoading = false
        //     })
        //     .addCase(createTask.rejected, (state, action) => {
        //         state.isLoading = false
        //         state.error = action.payload
        //     })
    },
})

export const { actions: updateTaskActions } = updateTaskSlice
export const { reducer: updateTaskReducer } = updateTaskSlice
