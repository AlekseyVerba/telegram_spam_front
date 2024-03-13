import './FormFooter.scss'

interface Props {
    children?: React.ReactNode
}

export const FormFooter = (props: Props) => {
    const { children } = props

    return (
        <div className='FormFooter'>
            {children}
        </div>
    )
}