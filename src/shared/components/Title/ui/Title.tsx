import { useMemo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { TitleColorEnum, TitleSizeEnum, TitleTextAlign } from "../models/types/Title"
import './Title.scss'

interface Props {
    className?: string
    children?: React.ReactNode
    size?: TitleSizeEnum
    color?: TitleColorEnum
    align?: TitleTextAlign
}

export const Title = (props: Props) => {
    const { 
        size = TitleSizeEnum.MEDIUM,
        color = TitleColorEnum.PRIMARY,
        align = TitleTextAlign.CENTER,
        className, 
        children
    } = props

    const classNameTitle = useMemo(() => {
        return classNames('Title', [className, size, color, align])
    }, [className, size, color, align])

    switch(size) {
        case TitleSizeEnum.SMALL: {
            return <h3 className={classNameTitle}>{children}</h3>
        };
        case TitleSizeEnum.MEDIUM: {
            return <h2 className={classNameTitle}>{children}</h2>
        }
        case TitleSizeEnum.BIG: {
            return <h1 className={classNameTitle}>{children}</h1>
        }
        default: {
            return null
        }
    }
}