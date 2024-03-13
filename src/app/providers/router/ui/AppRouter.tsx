import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { AppRoutesProps, RouteConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<div>...</div>}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        )
    }, [])

    return (
        <Routes>
            {
                Object.values(RouteConfig).map(renderWithWrapper)
            }
        </Routes>
    )
}
