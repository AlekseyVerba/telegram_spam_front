import { useMemo, useCallback } from "react"
import { signUpTelegramActions } from '../../../model/slice/signUpTelegramSlice'
import { Button } from "shared/components/Button"
import { FormHeader, FormInputs, FormFooter, Form } from "shared/components/Form"
import { Input } from "shared/components/Input"
import { useInput } from "shared/hooks"
import { useDispatch, useSelector } from "react-redux"
import { sendTelegramCode } from '../../../model/services/sendTelegramCode'
import { getIsLoading } from '../../../model/selectors/signUpTelegramSelector'
import './SendCodeTelegram.scss'

export const SendCodeTelegram = () => {
    const dispatch = useDispatch()

    const isLoading = useSelector(getIsLoading)

    const handlePhone = useCallback((value: string) => {
        dispatch(signUpTelegramActions.setPhone(value))
    }, [])

    const phoneInput = useInput('', {
        isPhone: {}
    }, handlePhone)

    const isButtonDisabled = useMemo(() => {
        return !((!phoneInput.error && phoneInput.isClearBlur))
    }, [phoneInput.error, phoneInput.isClearBlur])

    const submitForm = useCallback(() => {
        dispatch(sendTelegramCode(phoneInput.value))
    }, [dispatch, phoneInput.value])


    return (
        <Form className="SendCodeTelegram">
            <FormHeader title='Вход в телеграм'/>
            <FormInputs>
                <Input
                    value={phoneInput.value}
                    onChange={phoneInput.changeHadnlerInput}
                    isClearBlur={phoneInput.isClearBlur}
                    error={phoneInput.error}
                    onBlur={phoneInput.handlerChangeBlur}
                    placeholder='+79xxxxxxxxx'
                />
            </FormInputs>
            <FormFooter>
                    <div className="SendCodeTelegram__footer">
                        <Button
                            disabled={isButtonDisabled}
                            onClick={submitForm}
                            isLoading={isLoading}
                        >
                            Отправить код
                        </Button>
                    </div>
            </FormFooter>
        </Form>
    )
}