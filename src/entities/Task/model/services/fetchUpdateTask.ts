import { AxiosResponse } from "axios";
import { $api } from "shared/api/api";
import { Task } from "../type/Task";

export const fetctUpdateTask = async (
  task: Task | undefined,
  image?: File | null
): Promise<Components.Schemas.TaskDTO> => {
  if (!task) {
    throw new Error('fetctUpdateTask. Task must be type of Task')
  }

  const formData = new FormData();

  formData.append("name", task.name);
  formData.append("message", task.message);
  formData.append("cron", task.cron);
  formData.append("is_active", String(task.is_active));
  formData.append("chats", JSON.stringify(task.chats));

  if (!task.file) {
    formData.append("file", 'null');
  }

  if (image) {
    console.log('test image console')
    formData.append("file_preview", image);
  }

  console.log(formData.keys())

  const response = await $api.put<
    Paths.TaskControllerUpdateTask.Responses.$200,
    AxiosResponse<Paths.TaskControllerUpdateTask.Responses.$200>,
    FormData
  >(`/task/update/${task.id}`, formData);

  if (!response.data) {
    throw new Error("Данные пустые");
  }

  return response.data.task;
};
