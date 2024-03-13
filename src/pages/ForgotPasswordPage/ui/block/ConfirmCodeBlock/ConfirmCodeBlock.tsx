import { Form, FormFooter, FormHeader, FormInputs } from 'shared/components/Form'
import { AppRoutes } from 'shared/config/routeConfig/routeConfig'
import { Input, LabelTextAlignEnum } from 'shared/components/Input'
import { Button } from 'shared/components/Button'
import { Text, TextAlign, TextThemeEnum } from 'shared/components/Text/Text'
import { useInput } from 'shared/hooks'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ConfirmCodeBlock.scss'
import { getError, getIsLoading, getSuccessMessage } from '../../../model/selectors/forgotPasswordSlice'

export const ConfirmCodeBlock = () => {
    const dispatch = useDispatch()

    const isLoading = useSelector(getIsLoading)
    const error = useSelector(getError)
    const successMessage = useSelector(getSuccessMessage)

    const codeInput = useInput('', {
        isAplha: {},
        lengthMin: {
            value: 4
        },
        lengthMax: {
            value: 4
        }
    })

    const isButtonDisabled = useMemo(() => {
        return !((!codeInput.error && codeInput.isClearBlur))
    }, [codeInput.error, codeInput.isClearBlur])

    const submitForm = useCallback(() => {
        // dispatch(confirmCode({ code: codeInput.value }))
    }, [codeInput.value, codeInput.value])

    return (
        <Form>
        <FormHeader to={AppRoutes.HOME} toText='Вернуться на главную' title='Регистрация'/>

        <FormInputs>
            <Text 
                text={successMessage || 't ert ert ert ert ert er tert ert ert'}
                align={TextAlign.CENTER}
                className='ConfirmCodeBlock__text'
            />
            <Input
                value={codeInput.value}
                onChange={codeInput.changeHadnlerInput}
                isClearBlur={codeInput.isClearBlur}
                error={codeInput.error}
                onBlur={codeInput.handlerChangeBlur}
                placeholder='1234'
                classNameInput='ConfirmCodeBlock__input'
                labelTextAlign={LabelTextAlignEnum.CENTER}
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
                        Подтвердить
                    </Button>
                </div>
        </FormFooter>
    </Form>
    )
}