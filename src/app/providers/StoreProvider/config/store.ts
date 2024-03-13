import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { $api } from 'shared/api/api'
import { StateSchema, ThunkExtraArg } from './stateSchema'
import { createReducerManager } from './reducerManager'
import { loginPageReducer } from 'pages/LoginPage'
import { registerPageReducer } from 'pages/RegisterPage'
import { userReducer } from 'entities/User'
import { forgotPasswordReducer } from 'pages/ForgotPasswordPage'
import { signUpTelegramReducer } from 'features/signUpTelegram'
import { telegramPageReducer } from 'pages/TelegramPage'
import { createTaskReducer } from 'features/createTask'
import { tasksPageReducer } from 'pages/TasksPage'
import { updateTaskReducer } from 'features/updateTask'

export const createStore = (
    inititalStore: StateSchema,
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        loginPage: loginPageReducer,
        registerPage: registerPageReducer,
        forgotPasswordPage: forgotPasswordReducer,
        user: userReducer,
        signUpTelegram: signUpTelegramReducer,
        telegramPage: telegramPageReducer,
        createTask: createTaskReducer,
        tasksPage: tasksPageReducer,
        updateTask: updateTaskReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const extraArg: ThunkExtraArg = {
        api: $api,
    }

    const store = configureStore({
        // @ts-ignore
        reducer: reducerManager.reduce,
        preloadedState: inititalStore,
        devTools: true,
        // @ts-ignore
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}
