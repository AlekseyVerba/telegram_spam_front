import { CreateTask } from "features/createTask"
import { Title } from "shared/components/Title"
import { classNames } from "shared/lib/classNames/classNames"
import { LcHeader } from "widgets/headers/LcHeader"
import { Sidebar } from "widgets/Sidebar"

const TaskCreatePage = () => {
    return (
        <div className={classNames('CreateTaskPage', ['Page'])}>
            <LcHeader />
            <div className="Page__content">
                <Sidebar />
                <div className="Page__wrapper">
                    <CreateTask />
                </div>
            </div>
        </div>
    )
}

export default TaskCreatePage