import { Form, FormFooter, FormHeader, FormInputs } from 'shared/components/Form'
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLink, AppLinkSize, AppLinkTheme } from 'shared/components/AppLink'
import { Input } from 'shared/components/Input'
import { Button } from 'shared/components/Button'
import { Text, TextAlign, TextThemeEnum } from 'shared/components/Text/Text'
import { useInput } from 'shared/hooks'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getError, getIsLoading } from '../../../model/selectors/RegisterPage'
import { register } from '../../../model/services/register/register'
import { registerPageActions } from '../../../model/slice/registerPageSlice'

export const RegisterBlock = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoading)
    const error = useSelector(getError)

    const emailHandler = useCallback((value: string) => {
        dispatch(registerPageActions.setEmail(value))
    }, [dispatch])

    const emailInput = useInput('', {
        isEmail: {}
    }, emailHandler)

    const passwordInput = useInput('', {
        lengthMax: {
            value: 16
        },
        lengthMin: {
            value: 8
        }
    })

    const isButtonDisabled = useMemo(() => {
        return !((!emailInput.error && emailInput.isClearBlur) && (!passwordInput.error && passwordInput.isClearBlur))
    }, [emailInput.error, emailInput.isClearBlur ,passwordInput.error, passwordInput.isClearBlur])

    const submitForm = useCallback(() => {
        dispatch(register({ email: emailInput.value, password: passwordInput.value }))
    }, [emailInput.value, passwordInput.value])

    return (
        <Form>
        <FormHeader to={AppRoutes.HOME} toText='Вернуться на главную' title='Регистрация'/>
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
            <br/>
            <Input
                    type='password'
                    label='Пароль '
                    value={passwordInput.value}
                    onChange={passwordInput.changeHadnlerInput}
                    isClearBlur={passwordInput.isClearBlur}
                    error={passwordInput.error}
                    onBlur={passwordInput.handlerChangeBlur}
                    placeholder='********'
            />
        </FormInputs>
        <FormFooter>
                <div>
                    {error && <Text text={error} theme={TextThemeEnum.ERROR} align={TextAlign.CENTER}/>}
                    <Button
                        disabled={isButtonDisabled}
                        onClick={submitForm}
                        isLoading={isLoading}
                    >
                        Зарегистрироваться
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