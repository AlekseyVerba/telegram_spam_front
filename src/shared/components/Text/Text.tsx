import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames'
import './Text.scss'

export enum TextThemeEnum {
    PRIMARY = 'primary',
    ERROR = 'error',
    SUCCESS = 'success'
}

export enum TextAlign {
    START = 'align-start',
    CENTER = 'align-center',
    END = 'align-end'
}

interface TextProps {
    text?: string
    theme?: TextThemeEnum
    className?: string
    align?: TextAlign
}

export const Text: FC<TextProps> = (props) => {
    const {
        text,
        theme = TextThemeEnum.PRIMARY,
        className,
        align = TextAlign.START,
    } = props

    return (
        <div
            className={classNames('Text', [className], { [theme]: true, [align]: align })}
        >
            {text && <p className="Text__text">{text}</p>}
        </div>
    )
}
