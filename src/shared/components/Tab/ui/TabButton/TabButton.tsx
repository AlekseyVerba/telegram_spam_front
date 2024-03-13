import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/components/Button'
import './TabButton.scss'

interface Props {
    title: string,
    onClick: () => void,
    isActive: boolean
}

export const TabButton = (props: Props) => {
    const { title, onClick, isActive } = props

    return (
        <Button disabled={isActive} onClick={onClick} theme={ButtonTheme.OUTLINE} className={classNames('TabButton', [], { isActive })}>
            {title}
        </Button>
    )
}