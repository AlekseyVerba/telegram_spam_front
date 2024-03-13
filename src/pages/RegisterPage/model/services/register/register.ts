import { createAsyncThunk } from '@reduxjs/toolkit';
import { KEY_USER_IN_STORAGE } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider'
import { AxiosError, AxiosResponse } from 'axios';
import { HttpError } from 'types';

interface RegisterProps {
    email: string
    password: string
}

export const register = createAsyncThunk<
        Components.Schemas.RegistrationResponseDTO,
        RegisterProps,
        ThunkConfig<HttpError>
    >(
        'register/register',
        async (registerData, thunkApi) => {
            const { extra } = thunkApi
            try {
                // eslint-disable-next-line max-len
                const response = await extra.api.post<
                    Paths.AuthAppControllerRegistration.Responses.$200,
                    AxiosResponse<Paths.AuthAppControllerRegistration.Responses.$200>,
                    Paths.AuthAppControllerRegistration.RequestBody
                >('/auth-app/registration', registerData)

                if (!response.data) {
                    throw new Error('Данные пустые')
                }

                // localStorage.setItem(KEY_USER_IN_STORAGE, JSON.stringify(response.data))
                // thunkApi.dispatch(userActions.setAuthData(response.data));

                console.log(response.data)

                return response.data
            } catch (err: any) {
                return thunkApi.rejectWithValue(err.response.data)
            }
        },
    )
