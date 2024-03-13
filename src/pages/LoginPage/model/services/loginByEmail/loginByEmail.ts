import { createAsyncThunk } from '@reduxjs/toolkit';
import { KEY_USER_IN_STORAGE } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider'
import { AxiosResponse } from 'axios';
import { HttpError } from 'types';
import { userActions } from 'entities/User';

interface LoginByEmailProps {
    email: string
    password: string
}

export const loginByEmail = createAsyncThunk<
        Components.Schemas.AuthUserWithJwtTokenResponse,
        LoginByEmailProps,
        ThunkConfig<HttpError>
    >(
        'login/loginByemail',
        async (authData, thunkApi) => {
            const { extra, dispatch } = thunkApi
            try {
                // eslint-disable-next-line max-len
                const response = await extra.api.post<
                    Paths.AuthAppControllerLogin.Responses.$200,
                    AxiosResponse<Paths.AuthAppControllerLogin.Responses.$200>,
                    Paths.AuthAppControllerLogin.RequestBody
                >('/auth-app/login', authData)

                if (!response.data) {
                    throw new Error('Данные пустые')
                }

                const userWithToken = response.data.authUserWithJwtToken

                localStorage.setItem(KEY_USER_IN_STORAGE, userWithToken.token)
                dispatch(userActions.setAuthData(userWithToken));

                return response.data
            } catch (err: any) {
                return thunkApi.rejectWithValue(err.response.data)
            }
        },
    )
