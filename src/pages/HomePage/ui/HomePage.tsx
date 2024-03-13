import { classNames } from "shared/lib/classNames/classNames"
import { HomeHeader } from "widgets/headers/HomeHeader"

const HomePage = () => {

    return (
        <div className={classNames('HomePage', ['Page'])}>
            <HomeHeader />
        </div>
    )
}

export default HomePage