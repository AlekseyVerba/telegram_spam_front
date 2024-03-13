import './FormInputs.scss'

interface Props {
    children?: React.ReactNode
}

export const FormInputs = (props: Props) => {
    const { children } = props

    return (
        <div className='FormInputs'>
            {children}
        </div>
    )
}