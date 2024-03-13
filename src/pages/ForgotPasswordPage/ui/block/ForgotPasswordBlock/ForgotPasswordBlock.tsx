import { useMemo, useCallback } from "react"
import { Form } from "react-router-dom"
import { AppLink, AppLinkSize, AppLinkTheme } from "shared/components/AppLink"
import { FormHeader, FormInputs, FormFooter } from "shared/components/Form"
import { AppRoutes, RoutePath } from "shared/config/routeConfig/routeConfig"
import { Button } from "shared/components/Button"
import { Input } from "shared/components/Input"
import { useInput } from "shared/hooks"

export const ForgotPasswordBlock = () => {
    const emailInput = useInput('', {
        isEmail: {}
    })

    const isButtonDisabled = useMemo(() => {
        return !((!emailInput.error && emailInput.isClearBlur))
    }, [emailInput.error, emailInput.isClearBlur])

    const submitForm = useCallback(() => {
        
    }, [])


    return (
        <Form>
            <FormHeader to={AppRoutes.HOME} toText='Вернуться на главную' title='Восстановление пароля'/>
            <FormInputs>
                <Input
                    label='Почтовый ящик: '
                    value={emailInput.value}
                    onChange={emailInput.changeHadnlerInput}
                    isClearBlur={emailInput.isClearBlur}
                    error={emailInput.error}
                    onBlur={emailInput.handlerChangeBlur}
                    placeholder='example@mail.ru'
                />
            </FormInputs>
            <FormFooter>
                    <div>
                        <Button
                            disabled={isButtonDisabled}
                            onClick={submitForm}
                        >
                            Восстановить
                        </Button>
                    </div>
                    <div className='FormFooter-link-login'>
                        <AppLink
                            to={RoutePath.login}
                            size={AppLinkSize.NOTHING}
                            theme={AppLinkTheme.OUTLINE}
                        >Войти</AppLink>
                    </div>
            </FormFooter>
        </Form>
    )
}