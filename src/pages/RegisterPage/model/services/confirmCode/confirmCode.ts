import { createAsyncThunk } from '@reduxjs/toolkit';
import { KEY_USER_IN_STORAGE } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider'
import { HttpError } from 'types';
import { AxiosResponse } from 'axios';
import { getEmail } from '../../selectors/RegisterPage';
import { userActions } from 'entities/User';

interface confirmCodeProps {
    code: string
}

export const confirmCode = createAsyncThunk<
        Components.Schemas.AuthUserWithJwtTokenResponse,
        confirmCodeProps,
        ThunkConfig<HttpError>
    >(
        'register/confirm-code',
        async ({ code }, thunkApi) => {
            const { extra, getState, dispatch } = thunkApi

            const email = getEmail(getState())

            try {
                const response = await extra.api.post<
                    Paths.AuthAppControllerConfirmRegistrationToken.Responses.$200,
                    AxiosResponse<Paths.AuthAppControllerConfirmRegistrationToken.Responses.$200>,
                    Paths.AuthAppControllerConfirmRegistrationToken.RequestBody
                >('/auth-app/confirm/registration-token', { code, email })

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
