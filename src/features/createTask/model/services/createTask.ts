import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider'
import { HttpError } from 'types';
import { AxiosResponse } from 'axios';
import { getChannelsInputs, getCronInput, getImageInput, getIsActiveInput, getMessageInput, getNameInput } from '../selector/createTaskSelector';

export const createTask = createAsyncThunk<
        any,
        void,
        ThunkConfig<HttpError>
    >(
        'task/create',
        async (_, thunkApi) => {
            const { extra, getState } = thunkApi

            const name = getNameInput(getState())
            const cron = getCronInput(getState())
            const channels = getChannelsInputs(getState())
            const image = getImageInput(getState())
            const isActive = getIsActiveInput(getState())
            const message = getMessageInput(getState())

            
            const formData = new FormData()

            formData.append('name', name)
            formData.append('message', message)
            formData.append('cron', cron)
            formData.append('is_active', String(isActive))
            formData.append('chats', JSON.stringify(channels))

            if (image) {
                formData.append('file', image)
            }

            try {
                const response = await extra.api.post<
                    Paths.TaskControllerCreateTask.Responses.$200,
                    AxiosResponse< Paths.TaskControllerCreateTask.Responses.$200>,
                    FormData
                >('/task/create', formData)

                if (!response.data) {
                    throw new Error('Данные пустые')
                }

                return response.data
            } catch (err: any) {
                return thunkApi.rejectWithValue(err.response.data)
            }
        },
    )
