import { UpdateTask } from "features/updateTask"
import { classNames } from "shared/lib/classNames/classNames"
import { LcHeader } from "widgets/headers/LcHeader"
import { Sidebar } from "widgets/Sidebar"

const TaskUpdatePage = () => {
    return (
        <div className={classNames('TaskUpdatePage', ['Page'])}>
            <LcHeader />
            <div className="Page__content">
                <Sidebar />
                <div className="Page__wrapper">
                    <UpdateTask />
                </div>
            </div>
        </div>
    )
}

export default TaskUpdatePage