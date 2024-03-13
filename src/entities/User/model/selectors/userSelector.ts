import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'

export const getAuthData = (state: StateSchema) => state.user.authData
export const getUser = createSelector(getAuthData, (userData) => userData?.user)
export const getIsInited = (state: StateSchema) => state.user._inited