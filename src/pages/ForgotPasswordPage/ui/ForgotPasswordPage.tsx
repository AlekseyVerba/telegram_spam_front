import { classNames } from 'shared/lib/classNames/classNames'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlock } from '../model/selectors/forgotPasswordSlice'
import { getAuthData } from 'entities/User'
import { useNavigate } from 'react-router-dom'
import { forgotPasswordPageActions } from '../model/slice/forgotPasswordPageSlice'
import { BlockForgotPasswordEnum } from '../model/types/ForgotPasswordSchema'
import './ForgotPasswordPage.scss'
import { ForgotPasswordBlock } from './block/ForgotPasswordBlock/ForgotPasswordBlock'

const ForgotPasswordPage = () => {

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
            dispatch(forgotPasswordPageActions.setInitial())
        }
    }, [])

    const currentBlock = useMemo(() => {
        return block === BlockForgotPasswordEnum.FORGOT_PASSWORD
            ? <ForgotPasswordBlock />
            : null
    }, [block])

    return (
        <div className={classNames('ForgotPasswordPage', ['Page'])}>
            {
                currentBlock
            }
        </div>
    )
}

export default ForgotPasswordPage