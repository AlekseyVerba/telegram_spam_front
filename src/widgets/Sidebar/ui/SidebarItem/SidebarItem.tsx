import { classNames } from 'shared/lib/classNames/classNames'
import './SidebarItem.scss'
import { SidebarItemInterface } from 'widgets/Sidebar/model/types/Sidebar'
import { AppLink, AppLinkTheme } from 'shared/components/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface Props {
    item: SidebarItemInterface
    className?: string
}

export const SidebarItem = (props: Props) => {
    const { item: { path, text }, className } = props

    return (
        <AppLink
            to={RoutePath[path]}
            className={classNames('SidebarItem', [className])}
            theme={AppLinkTheme.OUTLINE}
        >
            {text}
        </AppLink>
    )
}