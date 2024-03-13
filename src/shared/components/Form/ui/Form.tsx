import { Card } from "shared/components/Card"
import './Form.scss'
import { classNames } from "shared/lib/classNames/classNames"

interface Props {
    children?: React.ReactNode
    className?: string
}

export const Form = (props: Props) => {
    const { children, className } = props

    return (
        <Card className={classNames('Form', [className])}>
            {children}
        </Card>
    )
}

