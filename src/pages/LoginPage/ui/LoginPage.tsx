import { classNames } from 'shared/lib/classNames/classNames'
import { Form, FormFooter, FormHeader, FormInputs } from 'shared/components/Form'
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLink, AppLinkSize, AppLinkTheme } from 'shared/components/AppLink'
import { Text, TextAlign, TextThemeEnum } from 'shared/components/Text/Text'
import { Input } from 'shared/components/Input'
import { Button } from 'shared/components/Button'
import { useInput } from 'shared/hooks'
import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginByEmail } from '../model/services/loginByEmail/loginByEmail'
import { getError, getIsLoading } from '../model/selectors/LoginPage'
import { useNavigate } from 'react-router-dom'
import { getAuthData } from 'entities/User'
import { loginPageActions } from '../model/slice/loginPageSlice'
import './LoginPage.scss'


const LoginPage = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoading)
    const error = useSelector(getError)
    const isAuth = useSelector(getAuthData)
    const navigate = useNavigate()    

    const emailInput = useInput('', {
        isEmail: {}
    })

    const passwordInput = useInput('', {
        lengthMax: {
            value: 16
        },
        lengthMin: {
            value: 8
        }
    })

    useEffect(() => {
        if (isAuth) {
            navigate(RoutePath.lc)
        }
    }, [isAuth, navigate])

    useEffect(() => {
        return () => {
            dispatch(loginPageActions.setInitial())
        }
    }, [])

    const isButtonDisabled = useMemo(() => {
        return !((!emailInput.error && emailInput.isClearBlur) && (!passwordInput.error && passwordInput.isClearBlur))
    }, [emailInput.error, emailInput.isClearBlur ,passwordInput.error, passwordInput.isClearBlur])

    const submitForm = useCallback(() => {
        dispatch(loginByEmail({ email: emailInput.value, password: passwordInput.value }))
    }, [emailInput.value, passwordInput.value])

    return (
        <div className={classNames('LoginPage', ['Page'])}>

            <Form>
                <FormHeader to={AppRoutes.HOME} toText='Вернуться на главную' title='Авторизация'/>
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
                    <div className='FormInputs-block-password'>
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
                        <div className='FormInputs-block-password-link-wrapper'>
                            <AppLink
                                
                                to={RoutePath['forgot-password']}
                                size={AppLinkSize.NOTHING}
                                theme={AppLinkTheme.OUTLINE}
                            >Забыли пароль?</AppLink>
                        </div>
                    </div>
                </FormInputs>
                <FormFooter>
                        <div>
                            {error && <Text text={error} theme={TextThemeEnum.ERROR} align={TextAlign.CENTER}/>}
                            <Button
                                disabled={isButtonDisabled}
                                onClick={submitForm}
                                isLoading={isLoading}
                            >
                                Войти
                            </Button>
                        </div>
                        <div className='FormFooter-link-register'>
                            <AppLink
                                to={RoutePath.register}
                                size={AppLinkSize.NOTHING}
                                theme={AppLinkTheme.OUTLINE}
                            >Регистрация</AppLink>
                        </div>
                </FormFooter>
            </Form>
        </div>
    )
}

export default LoginPage