import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { LcHeader } from "widgets/headers/LcHeader"
import { Sidebar } from "widgets/Sidebar"
import { fetchTasks } from "../model/services/fetchTasks"
import { getError, getIsLoading, getTasks } from "../model/selectors/tasksPage"
import { TaskList } from "entities/Task"

const TasksPage = () => {
    const disptach = useDispatch()

    const tasks = useSelector(getTasks)
    const isLoading = useSelector(getIsLoading)
    const error = useSelector(getError)

    useEffect(() => {
        disptach(fetchTasks())
    }, [])

    return (
        <div className={classNames('TasksPage', ['Page'])}>
            <LcHeader />
            <div className="Page__content">
                <Sidebar />
                <div className="Page__wrapper">
                    <TaskList tasks={tasks} isLoading={isLoading} error={error} />
                </div>
            </div>
        </div>
    )
}

export default TasksPage