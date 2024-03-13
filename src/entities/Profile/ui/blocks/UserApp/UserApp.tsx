import { Title } from "shared/components/Title"
import { Text } from 'shared/components/Text/Text'

interface Props {
    user: Components.Schemas.UserDTO
}

export const UserApp = (props: Props) => {
    const { user: { email } } = props

    return (
        <div className="UserApp">
            <Title>Профиль</Title>
            <br/>
            <Text text={email}/>
        </div>
    )
}