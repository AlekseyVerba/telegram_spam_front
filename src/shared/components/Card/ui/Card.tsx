import { classNames } from "shared/lib/classNames/classNames"
import './Card.scss'

interface Props {
    className?: string
    children?: React.ReactNode
}

export const Card = (props: Props) => {
    const { className, children } = props

    return (
        <div className={classNames('Card', [className])}>
            {children}
        </div>
    )
}