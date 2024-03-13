import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider'
import { HttpError } from 'types';
import { AxiosResponse } from 'axios';
import { getPhone, getPhoneCode, getPhoneCodeHash } from '../selectors/signUpTelegramSelector';

export const loginTelegram = createAsyncThunk<
        any,
        void,
        ThunkConfig<HttpError>
    >(
        'telegram/login',
        async (_, thunkApi) => {
            const { extra, getState } = thunkApi

            const phone =  getPhone(getState())
            const phoneCode = getPhoneCode(getState())
            const phoneCodeHash = getPhoneCodeHash(getState())

            try {
                const response = await extra.api.post<
                    Paths.AuthTelegramControllerSignIn.Responses.$201,
                    AxiosResponse<Paths.AuthTelegramControllerSignIn.Responses.$201>,
                    Paths.AuthTelegramControllerSignIn.RequestBody
                >('/auth-telegram/sign-in', { 
                    phone_code: phoneCode,
                    phone_code_hash: phoneCodeHash,
                    phone_number: phone
                 })

                if (!response.data) {
                    throw new Error('Данные пустые')
                }

                return response.data
            } catch (err: any) {
                return thunkApi.rejectWithValue(err.response.data)
            }
        },
    )
