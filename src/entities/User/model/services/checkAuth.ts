import { createAsyncThunk } from '@reduxjs/toolkit';
import { KEY_USER_IN_STORAGE } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider'
import { HttpError } from 'types';
import { AxiosResponse } from 'axios';
import { userActions } from 'entities/User';


export const checkAuth = createAsyncThunk<
        Components.Schemas.AuthUserWithJwtTokenResponse,
        void,
        ThunkConfig<HttpError>
    >(
        'auth/check',
        async (_, thunkApi) => {
            const { extra, dispatch } = thunkApi

            try {
                const token = localStorage.getItem(KEY_USER_IN_STORAGE)

                if (!token) {
                    throw new Error('Токен авторизации не существует')
                }

                const response = await extra.api.get<
                    Paths.AuthAppControllerCheckAuth.Responses.$200,
                    AxiosResponse<Paths.AuthAppControllerCheckAuth.Responses.$200>,
                    void
                >('/auth-app/check-auth')

                if (!response.data) {
                    throw new Error('Данные пустые')
                }

                const userWithToken = response.data.authUserWithJwtToken

                localStorage.setItem(KEY_USER_IN_STORAGE, userWithToken.token)
                dispatch(userActions.setAuthData(userWithToken));

                

                return response.data
            } catch (err: any) {
                localStorage.removeItem(KEY_USER_IN_STORAGE)
                return thunkApi.rejectWithValue(err.response.data)
            } finally {
                dispatch(userActions.setInitied(true))
            }
        },
    )
