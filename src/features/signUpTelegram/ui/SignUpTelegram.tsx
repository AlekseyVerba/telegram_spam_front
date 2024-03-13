import { useMemo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { BlockSignUpTelegramEnum } from "../model/types/signUpTelegram"
import { LoginTelegram } from "./blocks/LoginTelegram/LoginTelegram"
import { SendCodeTelegram } from "./blocks/SendCodeTelegram/SendCodeTelegram"
import { useSelector } from "react-redux"
import { getBlock } from "../model/selectors/signUpTelegramSelector"
import './SignUpTelegram.scss'

interface Props {
    className?: string
}

export const SignUpTelegram = (props: Props) => {
    const { className } = props

    const block = useSelector(getBlock)

    const currentBlock = useMemo(() => {
        return block === BlockSignUpTelegramEnum.LOGIN
            ? <LoginTelegram />
            : <SendCodeTelegram />
    }, [block])

    return (
        <div className={classNames('SignUpTelegram', [className])}>
            {
                currentBlock
            }
        </div>
    )
}