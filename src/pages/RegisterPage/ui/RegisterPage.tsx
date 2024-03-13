import { classNames } from 'shared/lib/classNames/classNames'
import { useDispatch, useSelector } from 'react-redux'
import { getBlock } from '../model/selectors/RegisterPage'
import { RegisterBlock } from './blocks/RegisterBlock/RegisterBlock'
import { ConfirmCodeBlock } from './blocks/ConfirmCodeBlock/ConfirmCodeBlock'
import { useEffect, useMemo } from 'react'
import { BlockRegisterEnum } from '../model/types/RegisterPageSchema'
import { useNavigate } from 'react-router-dom'
import { getAuthData } from 'entities/User'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { registerPageActions } from '../model/slice/registerPageSlice'
import './RegisterPage.scss'

const RegisterPage = () => {
    const dispatch = useDispatch()
    const block = useSelector(getBlock)
    const isAuth = useSelector(getAuthData)
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigate(RoutePath.lc)
        }
    }, [isAuth, navigate])

    useEffect(() => {
        return () => {
            dispatch(registerPageActions.setInitial())
        }
    }, [])

    const currentBlock = useMemo(() => {
        return block === BlockRegisterEnum.REGISTER
            ? <RegisterBlock />
            : <ConfirmCodeBlock />
    }, [block])

    return (
        <div className={classNames('RegisterPage', ['Page'])}>
            {
                currentBlock
            }
        </div>
    )
}

export default RegisterPage