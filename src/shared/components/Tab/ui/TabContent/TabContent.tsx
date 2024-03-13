import { classNames } from 'shared/lib/classNames/classNames'
import './TabContent.scss'

interface Props {
    content: React.ReactNode
    isActive: boolean
}

export const TabContent = (props: Props) => {
    const { content, isActive } = props

    return (
        <div className={classNames('TabContent', [], {isActive})}>
            {content}
        </div>
    )
}