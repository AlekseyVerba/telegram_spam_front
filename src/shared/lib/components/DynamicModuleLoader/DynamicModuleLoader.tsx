import { FC, useEffect } from 'react';
import { KeysOfState, StoreWithReducerManager } from 'app/providers/StoreProvider'
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in KeysOfState]?: Reducer
}

type ReducerEntry = [KeysOfState, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList,
    children?: React.ReactNode
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers } = props
    const dispatch = useDispatch()
    const store = useStore() as StoreWithReducerManager

    useEffect(() => {

        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as KeysOfState, reducer)
            dispatch({ type: `@INIT REDUCER ${name}` })
        })

        return () => {
            Object.entries(reducers).forEach(([name]) => {
                store.reducerManager.remove(name as KeysOfState)
                dispatch({ type: `@REMOVE REDUCER ${name}` })
            })
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}
