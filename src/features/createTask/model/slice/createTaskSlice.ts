import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { CreateTaskSchema } from '../types/createTaskSchema'
import { InputObject } from 'shared/components/DynamicInputFields'
import { createTask } from '../services/createTask'


const initialState: CreateTaskSchema = {
    nameInput: '',
    cronInput: '',
    channelsInputs: [''],
    imageInput: null,
    isActiveInput: true,
    messageInput: '',
    isLoading: false,
}

const createTaskSlice = createSlice({
    name: 'createTask',
    initialState,
    reducers: {
        setNameInput: (state, action: PayloadAction<string>) => {
            state.nameInput = action.payload
        },
        setCronInput: (state, action: PayloadAction<string>) => {
            state.cronInput = action.payload
        },
        setChannelsInputs: (state, action: PayloadAction<string[]>) => {
            state.channelsInputs = action.payload
        },
        setImageInput: (state, action: PayloadAction<File | null>) => {
            state.imageInput = action.payload
        },
        setIsActiveInput: (state) => {
            state.isActiveInput = !state.isActiveInput
        },
        setMessageInput: (state, action: PayloadAction<string>) => {
            state.messageInput = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTask.pending, (state) => {
                state.isLoading = true
                state.error = undefined
                state.message = undefined
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.channelsInputs = ['']
                state.cronInput = ''
                state.imageInput = null
                state.nameInput = ''
                state.messageInput = ''

                state.message = 'Good'

                state.isLoading = false
            })
            .addCase(createTask.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: createTaskActions } = createTaskSlice
export const { reducer: createTaskReducer } = createTaskSlice
