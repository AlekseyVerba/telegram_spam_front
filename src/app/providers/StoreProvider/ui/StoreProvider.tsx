import { FC } from 'react'
import { Provider } from 'react-redux'
import { DeepPartial } from '@reduxjs/toolkit'
import { createStore } from '../config/store'
import { StateSchema } from '../config/stateSchema'
import React from 'react'

interface StoreProviderProps {
    initialStore?: DeepPartial<StateSchema>,
    children?: React.ReactNode
}

export const StoreProvider: FC<StoreProviderProps> = ({ initialStore, children }) => {
    // const navigate = useNavigate()
    const store = createStore(initialStore as StateSchema)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
