import { classNames } from "shared/lib/classNames/classNames";
import { useMemo } from "react";
import { headerItems } from "../model/constants/headerItems";
import "./HomeHeader.scss";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLink, AppLinkSize, AppLinkTheme } from "shared/components/AppLink";
import { useSelector } from "react-redux";
import { getAuthData } from "entities/User";


export const HomeHeader = () => {
    const authData = useSelector(getAuthData)

    const items = useMemo(() => {
        return headerItems.map(item =>
            <AppLink
                to={item.path}
                size={AppLinkSize.NOTHING}
                theme={AppLinkTheme.OUTLINE}
                isHash={true}
                className="HomeHeader__item"
                key={item.path}
            >
                {item.text}
            </AppLink>
        )
    }, [])

    const buttonLoginOrLc = useMemo(() => {
        return authData ?  <AppLink to={RoutePath.lc}>Личный кабинет</AppLink> :
        <AppLink to={RoutePath.login}>Войти</AppLink>
    }, [authData])

    return (
        <header className={classNames("HomeHeader")}>
            <div className="HomeHeader__content">
                <div className="HomeHeader__logo">LOGO</div>
                <div className="HomeHeader__items">
                    {
                        items
                    }
                </div>
                <div className="HomeHeader__buttons">
                    <AppLink
                        to={""}
                        theme={AppLinkTheme.SECOND}
                        className="HomeHeader__button HomeHeader__button--contact-us"
                    >
                        Связаться с нами
                    </AppLink>
                    {buttonLoginOrLc}
                </div>
            </div>
        </header>
    );
};
