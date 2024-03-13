import { classNames } from "shared/lib/classNames/classNames";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, userActions } from "entities/User";
import { Button, ButtonTheme } from "shared/components/Button";
import { useCallback } from "react";
import './LcHeader.scss'
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export const LcHeader = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const authData = useSelector(getAuthData)

    const logout = useCallback(() => {
        dispatch(userActions.logout())
        navigate(RoutePath.home)
    }, [])

    return (
        <header className={classNames("LcHeader")}>
            <div className="LcHeader__content">
                <div className="LcHeader__logo">LOGO</div>
                <div className="LcHeader__buttons">
                    <div className="LcHeader__button-logout">
                        <div className="LcHeader__user-email">{authData?.user.email}</div>
                        <Button theme={ButtonTheme.ERROR} onClick={logout}>Выйти</Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
