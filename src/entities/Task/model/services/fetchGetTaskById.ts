import { AxiosResponse } from 'axios';
import { $api } from 'shared/api/api';

export const fetchGetTaskById = async (taskId: number): Promise<Components.Schemas.TaskDTO> => {
    try {
        const response = await $api.get<
        Paths.TaskControllerGetTask.Responses.$200,
        AxiosResponse<Paths.TaskControllerGetTask.Responses.$200>
    >(`/task/${taskId}`)

    if (!response.data) {
        throw new Error('Данные пустые')
    }

    return response.data.task
    } catch(err: any) {
        throw new Error(err.message)
    }
}
