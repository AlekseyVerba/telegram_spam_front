import { UserSchema } from './model/types/userSchema'
export { userActions, userReducer } from './model/slice/userSlice'
export { getAuthData, getUser } from './model/selectors/userSelector'
export type {UserSchema}