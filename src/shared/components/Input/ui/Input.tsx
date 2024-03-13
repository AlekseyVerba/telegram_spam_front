import { ChangeEvent, InputHTMLAttributes, useMemo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import './Input.scss'
import { LabelTextAlignEnum } from "../model/types/Input"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    labelTextAlign?: LabelTextAlignEnum
    classNameInput?: string
    classNameLabel?: string
    isStatusShow?: boolean
    error?: string | null
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    isClearBlur: boolean
}

export const Input = (props: Props) => {
    const {
        label,
        classNameInput,
        classNameLabel,
        labelTextAlign = LabelTextAlignEnum.LEFT, 
        isStatusShow = true,
        value,
        error,
        onChange,
        isClearBlur,
        ...allProps
    } = props

    return (
        <label className={classNames('Label', [classNameLabel, labelTextAlign], { infoBlock: isClearBlur, error: !!error, success: !error })}>
            {label &&  <p className="Label__text">{label}</p>}
            <input {...allProps} className={classNames('Input', [classNameInput])} value={value} onChange={onChange} />
            {
                isStatusShow &&
                <>
                    <div className="Input__info Input__info--fail">{error}</div>
                    <div className="Input__info Input__info--success">Успешно!</div>
                </>
            }
        </label>
    )
}