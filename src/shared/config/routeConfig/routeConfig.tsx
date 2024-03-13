import ForgotPasswordPage from 'pages/ForgotPasswordPage/ui/ForgotPasswordPage';
import { HomePage } from 'pages/HomePage';
import { LCPage } from 'pages/LCPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { TaskCreatePage } from 'pages/TaskCreatePage';
import { TaskUpdatePage } from 'pages/TaskUpdatePage';
import { TasksPage } from 'pages/TasksPage';
import { TelegramPage } from 'pages/TelegramPage';
import { RouteProps } from 'react-router-dom';

export enum HomeHashRoutes {
    PRODUCT = '#product',
    WHAT_WE_DO = '#what_we_do',
    PRICING = '#pricing'
}

export enum AppRoutes {
    HOME = 'home',
    LOGIN = 'login',
    REGISTER = 'register',
    FORGOT_PASSWORD = 'forgot-password',
    LC = 'lc',
    TASKS = 'tasks',
    CREATE_TASK = 'create_task',
    UPDATE_TASK = 'update_task',
    TELEGRAM = 'telegram',
    // REGISTRATION = 'registration'
    // NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.REGISTER]: '/register',
    [AppRoutes.FORGOT_PASSWORD]: '/forgot-password',
    [AppRoutes.LC]: '/lc',
    [AppRoutes.TASKS]: '/lc/tasks',
    [AppRoutes.CREATE_TASK]: '/lc/tasks/create',
    [AppRoutes.TELEGRAM]: '/lc/telegram',
    [AppRoutes.UPDATE_TASK]: '/lc/tasks/update/' // /id
    // [AppRoutes.NOT_FOUND]: '*',
}

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export const RouteConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.HOME]: {
        element: <HomePage />,
        path: RoutePath.home,
    },
    [AppRoutes.LOGIN]: {
        element: <LoginPage />,
        path: RoutePath.login,
    },
    [AppRoutes.REGISTER]: {
        element: <RegisterPage />,
        path: RoutePath.register,
    },
    [AppRoutes.FORGOT_PASSWORD]: {
        element: <ForgotPasswordPage />,
        path: RoutePath['forgot-password']
    },
    [AppRoutes.LC]: {
        element: <LCPage />,
        path: RoutePath.lc,
        authOnly: true
    },
    [AppRoutes.TASKS]: {
        element: <TasksPage />,
        path: RoutePath.tasks,
        authOnly: true
    },
    [AppRoutes.CREATE_TASK]: {
        element: <TaskCreatePage />,
        path: RoutePath.create_task,
        authOnly: true
    },
    [AppRoutes.UPDATE_TASK]: {
        element: <TaskUpdatePage />,
        path: RoutePath.update_task + ':id',
        authOnly: true
    },
    [AppRoutes.TELEGRAM]: {
        element: <TelegramPage />,
        path: RoutePath.telegram,
        authOnly: true
    },
}
