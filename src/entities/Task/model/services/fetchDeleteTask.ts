import { AxiosResponse } from 'axios';
import { $api } from 'shared/api/api';



export const fetchDeleteTask = async (taskId: number): Promise<void> => {
    const response = await $api.delete<
        Paths.TaskControllerDeleteTask.Responses.$200,
        AxiosResponse<Paths.TaskControllerDeleteTask.Responses.$200>
    >(`/task/delete/${taskId}`)

    if (!response.data) {
        throw new Error('Данные пустые')
    }
}
