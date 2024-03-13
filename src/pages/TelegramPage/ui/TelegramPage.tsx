import { getUser } from "entities/User"
import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { LcHeader } from "widgets/headers/LcHeader"
import { Sidebar } from "widgets/Sidebar"
import { getTelegramUser } from "../models/services/getTelegramUser"
import { getIsLoading, getUserTelegram } from "../models/selectors/telegramPage"
import { Loader } from "shared/components/Loader"
import { SignUpTelegram } from "features/signUpTelegram"
import './TelegramPage.scss'
import { UserTelegram } from "entities/UserTelegram"

const TelegramPage = () => {
    const dispatch = useDispatch()

    const user = useSelector(getUser)
    const userTelegram = useSelector(getUserTelegram)
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        if (user) {
            dispatch(getTelegramUser())
        }
    }, [user])

    const content = useMemo(() => {
        if (isLoading) {
            return <Loader />
        }

        if (userTelegram) {
            return <UserTelegram />
        }

        return <SignUpTelegram />

    }, [userTelegram, isLoading])


    return (
        <div className={classNames('TelegramPage', ['Page'])}>
        <LcHeader />
        <div className="Page__content">
            <Sidebar />
            <div className={classNames('Page__wrapper')}>
                {/* <Title align={TitleTextAlign.CENTER}>Telegram</Title> */}
                {/* <div>
                    
                </div> */}

                {content}
            </div>
        </div>
    </div>
    )
}

export default TelegramPage