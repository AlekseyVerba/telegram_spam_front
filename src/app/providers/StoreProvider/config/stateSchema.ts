import { ReducersMapObject, AnyAction, EnhancedStore, Reducer } from "@reduxjs/toolkit"
import { AxiosInstance } from "axios"
import { UserSchema } from "entities/User"
import { CreateTaskSchema } from "features/createTask"
import { SignUpTelegramSchema } from "features/signUpTelegram"
import { UpdateTaskSchema } from "features/updateTask"
import { ForgotPasswordSchema } from "pages/ForgotPasswordPage"
import { LoginPageSchema } from "pages/LoginPage"
import { RegisterPageSchema } from "pages/RegisterPage"
import { TasksPageSchema } from "pages/TasksPage"
import { TelegramPageSchema } from "pages/TelegramPage"

export interface StateSchema {
    loginPage: LoginPageSchema
    registerPage: RegisterPageSchema
    forgotPasswordPage: ForgotPasswordSchema
    user: UserSchema
    signUpTelegram: SignUpTelegramSchema
    telegramPage: TelegramPageSchema
    createTask: CreateTaskSchema
    updateTask: UpdateTaskSchema
    tasksPage: TasksPageSchema
    log?: any
}

export type KeysOfState = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => StateSchema
    add: (key: KeysOfState, reducer: Reducer) => void
    remove: (key: KeysOfState) => void
}

export interface StoreWithReducerManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
