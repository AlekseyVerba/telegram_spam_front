import { AppRoutes } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemInterface {
    text: string
    path: AppRoutes
}


export const SidebarItems: SidebarItemInterface[] = [
    {
        text: 'Профиль',
        path: AppRoutes.LC
    },
    {
        text: 'Telegram',
        path: AppRoutes.TELEGRAM
    },
    {
        text: 'Задачи',
        path: AppRoutes.TASKS
    },
    {
        text: 'Создать задачу',
        path: AppRoutes.CREATE_TASK
    }
]