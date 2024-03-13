import { UserApp } from "./blocks/UserApp/UserApp"
import './Profile.scss'

interface Props {
    user: Components.Schemas.UserDTO
}

export const Profile = (props: Props) => {
    const { user } = props

    return (
        <div className="Profile">
            <UserApp user={user} />
        </div>
    )
}