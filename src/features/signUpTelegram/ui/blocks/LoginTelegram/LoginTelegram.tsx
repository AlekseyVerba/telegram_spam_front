import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { useInput } from 'shared/hooks'
import { Button } from 'shared/components/Button'
import { FormHeader, FormInputs, FormFooter, Form } from 'shared/components/Form'
import { Input } from 'shared/components/Input'
import { getIsLoading } from '../../../model/selectors/signUpTelegramSelector'
import { loginTelegram } from '../../../model/services/loginTelegram'
import { signUpTelegramActions } from '../../../model/slice/signUpTelegramSlice'
import './LoginTelegram.scss'

export const LoginTelegram = () => {
    const dispatch = useDispatch()

    const isLoading = useSelector(getIsLoading)

    const handleCode = useCallback((value: string) => {
        dispatch(signUpTelegramActions.setPhoneCode(value))
    }, [])

    const codeInput = useInput('', {
        isAplha: {}
    }, handleCode)

    const isButtonDisabled = useMemo(() => {
        return !((!codeInput.error && codeInput.isClearBlur))
    }, [codeInput.error, codeInput.isClearBlur])

    const submitForm = useCallback(() => {
        dispatch(loginTelegram())
    }, [dispatch, codeInput.value])


    return (
        <Form className="LoginTelegram">
            <FormHeader title='Вход в телеграм'/>
            <FormInputs>
                <Input
                    value={codeInput.value}
                    onChange={codeInput.changeHadnlerInput}
                    isClearBlur={codeInput.isClearBlur}
                    error={codeInput.error}
                    onBlur={codeInput.handlerChangeBlur}
                    placeholder='XXXXX'
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