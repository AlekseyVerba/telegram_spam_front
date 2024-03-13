import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider'
import { HttpError } from 'types';
import { AxiosResponse } from 'axios';

export const getTelegramUser = createAsyncThunk<
        Components.Schemas.UserTelegramDTO,
        void,
        ThunkConfig<HttpError>
    >(
        'telegram/getUser',
        async (_, thunkApi) => {
            const { extra, dispatch } = thunkApi

            try {
                const response = await extra.api.get<
                    Paths.AuthTelegramControllerGetMyUser.Responses.$200,
                    AxiosResponse<Paths.AuthTelegramControllerGetMyUser.Responses.$200>
                >('/auth-telegram/user')

                if (!response.data) {
                    throw new Error('Данные пустые')
                }

                console.log(response.data.userTelegram)

                return response.data.userTelegram
            } catch (err: any) {
                return thunkApi.rejectWithValue(err.response.data)
            }
        },
    )
