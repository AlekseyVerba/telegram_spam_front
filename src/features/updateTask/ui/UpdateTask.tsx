import React, { useCallback, useEffect} from "react";
import { useInput } from "shared/hooks";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, getMessage, getCurrentTask, getImageInput } from "../model/selector/updateTaskSelector";
import { updateTaskActions } from "../model/slice/updateTaskSlice";
import { TaskForm, TaskFormEnum, fetchGetTaskById, fetctUpdateTask } from "entities/Task";
import { Loader } from "shared/components/Loader";
import { useParams } from "react-router-dom";

export const UpdateTask = () => {
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>();

    const task = useSelector(getCurrentTask)
    const imageInput = useSelector(getImageInput)
  const message = useSelector(getMessage)
  const isLoading = useSelector(getIsLoading)

  const handlerNameInput = useCallback((value: string) => {
    dispatch(updateTaskActions.setNameInput(value))
  }, [])

  const handlerCronInput = useCallback((value: string) => {
    dispatch(updateTaskActions.setCronInput(value))
  }, [])

  const handlerImageInput = useCallback((value: File | null) => {
    dispatch(updateTaskActions.setImageInput(value))
  }, [])

  const handlerIsActiveInput = useCallback(() => {
    dispatch(updateTaskActions.setIsActiveInput())
  }, [])

  const handlerChannetsInputs = useCallback((value: string[]) => {
    dispatch(updateTaskActions.setChannelsInputs(value))
  }, [])

  const handlerMessageInput = useCallback((value: string) => {
    dispatch(updateTaskActions.setMessageInput(value))
  }, [])

  const setImage = useCallback((value: string | null) => {
    dispatch(updateTaskActions.setImage(value))
  }, [])



  const nameInput = useInput("", {
    isString: {},
    lengthMin: {
      message: 'Поле должно быть заполнено',
      value: 1
    }
  }, handlerNameInput);

  const cronInput = useInput("", {
    isCron: {}
  }, handlerCronInput);

  useEffect(() => {
    if (message) {
      nameInput.clearValue()
      cronInput.clearValue()
    }
  }, [message])

  useEffect(() => {
    const func = async () => {
        try {
            dispatch(updateTaskActions.setIsLoading(true))
            const task = await fetchGetTaskById(Number(id))
            dispatch(updateTaskActions.setTask(task))

            nameInput.changeValue(task.name)
            cronInput.changeValue(task.cron)
         } catch(err) {
        
         } finally {
            dispatch(updateTaskActions.setIsLoading(false))
         }
    }

    func()
  }, [id])

  const submitForm = useCallback(async () => {
    try {
        dispatch(updateTaskActions.setIsLoading(true))
        const updatedTask = await fetctUpdateTask(task, imageInput)
        dispatch(updateTaskActions.setTask(updatedTask))
    } catch(err) {

    } finally {
        dispatch(updateTaskActions.setIsLoading(false))
    }
  }, [id, task, imageInput])

  if (isLoading && !task) {
    return <Loader />
  }

  if (!task) {
    return <div>Задача не найдена</div>
  }

  return <TaskForm
      nameInput={nameInput}
      cronInput={cronInput}
      channelsInputs={task.chats}
      setChannelsInputs={handlerChannetsInputs}
      messageInput={task.message}
      setMessageInput={handlerMessageInput}
      isActive={task.is_active}
      setIsActive={handlerIsActiveInput}
      imageInput={imageInput}
      setImageInput={handlerImageInput}
      type={TaskFormEnum.CREATE}
      submit={submitForm}
      isLoading={isLoading}
      image={task.file}
      deleteImage={(value) => setImage(value)}
      isCheckBlur={false}
      textSubmitButton="Редактировать"
    />
};
