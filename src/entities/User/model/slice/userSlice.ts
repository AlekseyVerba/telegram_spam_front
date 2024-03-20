import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/userSchema'
import { KEY_USER_IN_STORAGE } from 'shared/const/localstorage'
import { $api } from 'shared/api/api'


const initialState: UserSchema = {
    authData: undefined,
    _inited: false
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<Components.Schemas.AuthUserWithJwtToken>) => {
            state.authData = action.payload
            $api.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`
        },
        setInitied: (state, action: PayloadAction<boolean>) => {
            state._inited = action.payload
        },
        logout: (state) => {
            state.authData = undefined
            localStorage.removeItem(KEY_USER_IN_STORAGE)

            $api.defaults.headers.common['Authorization'] = `Bearer`
        }
    },
    extraReducers: (builder) => {

    },
})

export const { actions: userActions } = UserSlice
export const { reducer: userReducer } = UserSlice
