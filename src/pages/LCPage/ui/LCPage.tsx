import { Profile } from "entities/Profile"
import { getUser } from "entities/User"
import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { LcHeader } from "widgets/headers/LcHeader"
import { Sidebar } from "widgets/Sidebar"
import './LcPage.scss'

const LCPage = () => {
    const user = useSelector(getUser)

    return (
        <div className={classNames('LcPage', ['Page'])}>
            <LcHeader />
            <div className="Page__content">
                <Sidebar />
                <div className="Page__wrapper">
                    <Profile user={user!} />
                </div>
            </div>
        </div>
    )
}

export default LCPage