import { Loader } from "shared/components/Loader"
import { Task } from "../../model/type/Task"
import { Title } from "shared/components/Title"
import { TaskListItem } from "../TaskListItem/TaskListItem"
import './TaskList.scss'
import { classNames } from "shared/lib/classNames/classNames"

interface Props {
    tasks: Task[]
    isLoading: boolean
    error?: string
}

export const TaskList = (props: Props) => {
    const { tasks, isLoading, error } = props

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <Title>{error}</Title>
    }

    return (
        <div className={classNames('TaskList')}>
            {tasks.map(task => <TaskListItem task={task} key={task.id} />)}
        </div>
    )
}