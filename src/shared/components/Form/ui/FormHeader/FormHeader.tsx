import { AppLink, AppLinkSize, AppLinkTheme } from "shared/components/AppLink"
import { Title, TitleSizeEnum, TitleColorEnum } from "shared/components/Title"
import { AppRoutes, RoutePath } from "shared/config/routeConfig/routeConfig"
import './FormHeader.scss'

interface Props {
    toText?: string
    to?: AppRoutes
    title: string
}

export const FormHeader = (props: Props) => {
    const { to, title, toText } = props

    return (
        <>
            {toText && to &&             <AppLink
                to={RoutePath[to]}
                size={AppLinkSize.NOTHING}
                theme={AppLinkTheme.OUTLINE}
            >{toText}</AppLink>}
            <Title size={TitleSizeEnum.BIG} color={TitleColorEnum.SECOND} >{title}</Title>
        </>
    )
}