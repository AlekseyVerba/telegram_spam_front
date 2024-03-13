import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider'
import { AxiosResponse } from 'axios';
import { Task } from 'entities/Task';
import { HttpError } from 'types';


export const fetchTasks = createAsyncThunk<
        Task[],
        undefined,
        ThunkConfig<HttpError>
    >(
        'Tasks',
        async (_, thunkApi) => {
            const { extra } = thunkApi

            try {
                const response = await extra.api.get<
                    Paths.TaskControllerGetAllMyTasks.Responses.$200,
                    AxiosResponse<Paths.TaskControllerGetAllMyTasks.Responses.$200>
                >('/task/all/my')

                if (!response.data) {
                    throw new Error('Данные пустые')
                }

                return response.data.taskList
            } catch (err: any) {
                return thunkApi.rejectWithValue(err.response.data)
            }
        },
    )
