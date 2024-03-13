import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider'
import { HttpError } from 'types';
import { AxiosResponse } from 'axios';

export const sendTelegramCode = createAsyncThunk<
        Components.Schemas.AuthSendCodeResponse,
        string,
        ThunkConfig<HttpError>
    >(
        'telegram/sendCode',
        async (phone_number: string, thunkApi) => {
            const { extra } = thunkApi

            try {
                const response = await extra.api.post<
                    Paths.AuthTelegramControllerSendCode.Responses.$200,
                    AxiosResponse<Paths.AuthTelegramControllerSendCode.Responses.$200>,
                    Paths.AuthTelegramControllerSendCode.RequestBody
                >('/auth-telegram/send-code', {
                    phone_number
                })

                if (!response.data) {
                    throw new Error('Данные пустые')
                }

                return response.data.sendCodeResponse
            } catch (err: any) {
                return thunkApi.rejectWithValue(err.response.data)
            }
        },
    )
