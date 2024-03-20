import React, { useCallback, useEffect} from "react";
import { useInput } from "shared/hooks";
import './CreateTask.scss'
import { useDispatch, useSelector } from "react-redux";
import { getChannelsInputs, getImageInput, getIsActiveInput, getIsLoading, getMessage, getMessageInput } from "../model/selector/createTaskSelector";
import { createTaskActions } from "../model/slice/createTaskSlice";
import { createTask } from "../model/services/createTask";
import { TaskForm, TaskFormEnum } from "entities/Task";

export const CreateTask = () => {
  const dispatch = useDispatch()
  const channelsInputs = useSelector(getChannelsInputs)
  const imageInput = useSelector(getImageInput)
  const isActive = useSelector(getIsActiveInput)
  const messageInput = useSelector(getMessageInput)
  const message = useSelector(getMessage)
  const isLoading = useSelector(getIsLoading)

  const handlerNameInput = useCallback((value: string) => {
    dispatch(createTaskActions.setNameInput(value))
  }, [])

  const handlerCronInput = useCallback((value: string) => {
    dispatch(createTaskActions.setCronInput(value))
  }, [])

  const handlerImageInput = useCallback((value: File | null) => {
    dispatch(createTaskActions.setImageInput(value))
  }, [])

  const handlerIsActiveInput = useCallback(() => {
    dispatch(createTaskActions.setIsActiveInput())
  }, [])

  const handlerChannetsInputs = useCallback((value: string[]) => {
    dispatch(createTaskActions.setChannelsInputs(value))
  }, [])

  const handlerMessageInput = useCallback((value: string) => {
    dispatch(createTaskActions.setMessageInput(value))
  }, [])

  const submitForm = useCallback(() => {
    dispatch(createTask())
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

  
  return <TaskForm
      nameInput={nameInput}
      cronInput={cronInput}
      channelsInputs={channelsInputs}
      setChannelsInputs={handlerChannetsInputs}
      messageInput={messageInput}
      setMessageInput={handlerMessageInput}
      isActive={isActive}
      setIsActive={handlerIsActiveInput}
      imageInput={imageInput}
      setImageInput={handlerImageInput}
      type={TaskFormEnum.CREATE}
      submit={submitForm}
      isLoading={isLoading}
      textSubmitButton="Создать"
    />
};

