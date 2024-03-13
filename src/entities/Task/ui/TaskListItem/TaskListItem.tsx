import { Form } from "shared/components/Form"
import { Task } from "../../model/type/Task"
import { classNames } from "shared/lib/classNames/classNames"
import { Title, TitleTextAlign } from "shared/components/Title"
import { Image } from 'shared/components/Image'
import { Button, ButtonTheme } from "shared/components/Button"
import { Text } from 'shared/components/Text/Text'
import './TaskListItem.scss'
import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { fetchDeleteTask } from "../../model/services/fetchDeleteTask"
import { tasksPageActions } from "pages/TasksPage"
import { AppLink } from "shared/components/AppLink"
import { RoutePath } from "shared/config/routeConfig/routeConfig"

interface Props {
    task: Task
}

export const TaskListItem = (props: Props) => {
    const { task: { id, name, message, is_active, file, cron, createdAt } } = props
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const handleDeleteTask = useCallback(async () => {
        setIsLoading(true)
        await fetchDeleteTask(id)
        dispatch(tasksPageActions.deleteTask(id))
        setIsLoading(false)
    }, [id])

    return (
        <Form className={classNames('TaskListItem')}>
            <Title align={TitleTextAlign.START}>{name}</Title>
            <div className="TaskListItem__block">
                {file && <Image src={file} className="TaskListItem__image" />}
            </div>
            <div className="TaskListItem__block">
            <Text text={message} />
            </div>
            <div className="TaskListItem__block">
            <Text text={`Крон: ${cron}`} />
            </div>
            <div className="TaskListItem__block">
            <Text text={`Активна: ${is_active ? 'Да' : 'Нет'}`} />
            </div>
            <div className="TaskListItem__block">
                <Text text={`Дата создания: ${createdAt}`} />
            </div>
            <div className="TaskListItem__block TaskListItem__block--footer">
                <Button theme={ButtonTheme.ERROR} onClick={handleDeleteTask} isLoading={isLoading}>Удалить</Button>
                <AppLink to={`${RoutePath.update_task}${id}`}>Редактировать</AppLink>
            </div>
        </Form>
    )
}