import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { NavHashLink } from 'react-router-hash-link';
import './AppLink.scss'
import { AppLinkTheme, AppLinkSize } from '../model/types/AppLink';

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    size?: AppLinkSize
    isHash?: boolean
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        theme = AppLinkTheme.PRIMARY,
        size = AppLinkSize.SMALL,
        isHash = false,
        to,
        children,
        ...others
    } = props

    if(isHash) {
        return (
            <NavHashLink to={to} className={classNames('AppLink', [theme, className, size])} {...others}>
                {children}
            </NavHashLink>
        )
    }

    return (
        <Link to={to} className={classNames('AppLink', [theme, className, size])} {...others}>
            {children}
        </Link>
    )
}
