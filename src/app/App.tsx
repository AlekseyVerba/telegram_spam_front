import './styles/index.scss'
import { Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'
import { classNames } from 'shared/lib/classNames/classNames'
import { useDispatch, useSelector } from 'react-redux'
import { getIsInited } from 'entities/User/model/selectors/userSelector'
import { checkAuth } from 'entities/User/model/services/checkAuth'

export const App = () => {
    const dispatch = useDispatch()
    const isInited = useSelector(getIsInited)

    useEffect(() => {
        dispatch(checkAuth())
    }, [])

    return (
        <div className={classNames('app', [])}>
            <Suspense fallback="">
                <div className="content-page">
                  {isInited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    )
}
