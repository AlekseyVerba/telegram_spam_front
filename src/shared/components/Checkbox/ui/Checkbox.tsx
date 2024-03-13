import { Dispatch, SetStateAction } from "react"
import { Text } from "shared/components/Text/Text"

interface Props {
    title: string
    isChecked: boolean
    setIsChecked: () => void
}

export const Checkbox = (props: Props) => {
    const { title, isChecked, setIsChecked } = props

    const OnChangeHandler = () => {
        setIsChecked()
    }

    return (
        <div className="Checkbox">
            <Text text={title}/>
            <input type="checkbox" checked={isChecked} onChange={OnChangeHandler} />
        </div>
    )
}