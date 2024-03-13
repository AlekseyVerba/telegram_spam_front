import { HomeHashRoutes } from "shared/config/routeConfig/routeConfig";
import { HeaderItemType } from "../types/HomeHeader";

export const headerItems: HeaderItemType[] = [
    {
        text: 'продукт',
        path: HomeHashRoutes.PRODUCT
    },
    {
        text: 'что мы делаем',
        path: HomeHashRoutes.WHAT_WE_DO
    },
    {
        text: 'цена',
        path: HomeHashRoutes.PRICING
    }
]