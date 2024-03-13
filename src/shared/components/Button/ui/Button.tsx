import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonTheme, ButtonSize } from '../model/types/Button';
import './Button.scss'
import { SmallLoader } from 'shared/components/SmallLoader';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
    isLoading?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ButtonTheme.PRIMARY,
        size = ButtonSize.SMALL,
        disabled = false,
        isLoading = false,
        children,
        ...others
    } = props

    return (
        <button disabled={disabled} className={classNames('Button', [theme, className, size], {isLoading, disabled})} {...others}>
            <div className="Button__inside">
                <span>{children}</span>
                {
                    isLoading && (<div className="Button__loading">
                        <SmallLoader />
                    </div>)
                }
            </div>
        </button>
    )
}
