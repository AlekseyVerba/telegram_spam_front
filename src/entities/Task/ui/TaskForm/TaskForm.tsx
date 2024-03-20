import { DynamicInputFields } from "shared/components/DynamicInputFields";
import { Form } from "shared/components/Form";
import { Input } from "shared/components/Input";
import { Title, TitleSizeEnum } from "shared/components/Title";
import { useInputReturn } from "shared/hooks/useInput/useInput";
import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useMemo, useRef } from "react";
import { Checkbox } from "shared/components/Checkbox";
import { Button, ButtonTheme } from "shared/components/Button";
import { TaskFormEnum } from "entities/Task/model/type/TaskForm";
import { UploadImage } from "shared/components/UploadImage";
import './TaskForm.scss'
import { Image } from "shared/components/Image";

interface Props {
    nameInput: useInputReturn
    cronInput: useInputReturn
    channelsInputs: string[]
    setChannelsInputs: (value: string[]) => void
    messageInput: string
    setMessageInput: (value: string) => void
    isActive: boolean
    setIsActive: () => void
    type: TaskFormEnum
    imageInput?: File | null
    image?: string | null
    isCheckBlur?: boolean
    deleteImage?: (value:  string | null) => void
    setImageInput?: (value: File | null) => void
    submit: () => void
    isLoading: boolean
    textSubmitButton: string
}

export const TaskForm = (props: Props) => {
    const { 
        nameInput,
        channelsInputs,
        cronInput,
        setChannelsInputs,
        messageInput,
        setMessageInput,
        isActive,
        setIsActive,
        imageInput,
        setImageInput,
        isLoading,
        submit,
        textSubmitButton,
        type,
        deleteImage,
        isCheckBlur = true,
        image
    } = props

    const editorRef = useRef<any>(null);

    useEffect(() => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    }, [])

    const isButtonDisabled = useMemo(() => {
        if (isCheckBlur) {
          if (!(nameInput.isClearBlur && cronInput.isClearBlur)) {
            return true
          }
        }

        return !(!nameInput.error && !cronInput.error)

    }, [nameInput.error, nameInput.isClearBlur, cronInput.error, cronInput.isClearBlur])    

  return (
    <Form className="TaskForm">
      <div className="TaskForm__block">
        <Input
          label="Название"
          value={nameInput.value}
          onChange={nameInput.changeHadnlerInput}
          onBlur={nameInput.handlerChangeBlur}
          isClearBlur={nameInput.isClearBlur}
          error={nameInput.error}
          placeholder=""
        />
      </div>
      <div className="TaskForm__block">
        <DynamicInputFields
          inputs={channelsInputs}
          setInputs={setChannelsInputs}
        />
      </div>
      <div className="TaskForm__block">
        <Input
          label="Время повторения (cron)"
          value={cronInput.value}
          onChange={cronInput.changeHadnlerInput}
          onBlur={cronInput.handlerChangeBlur}
          isClearBlur={cronInput.isClearBlur}
          error={cronInput.error}
          placeholder=""
        />
      </div>
      <div className="TaskForm__block">
        <Title className="TaskForm__message" size={TitleSizeEnum.SMALL}>
          Сообщение 
        </Title>
        <Editor
          apiKey={process.env.TINY_KEY}
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            height: 300,
            menubar: false,
            plugins: ["link", "code", "emoticons"],
            toolbar:
              "bold italic underline strikethrough code | align lineheight | link | emoticons",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onEditorChange={(e) => setMessageInput(e)}
          value={messageInput}
        />
      </div>
      <div className="TaskForm__block">
        <Checkbox
          isChecked={isActive}
          setIsChecked={setIsActive}
          title="Активна ли задача"
        />
      </div>
      <div className="TaskForm__block">
        {/* {
            type === TaskFormEnum.CREATE
            ? <UploadImage image={imageInput} setImage={setImageInput!} />
            : <div></div>
        } */}
        {
          image ?
            <div>
              <Image src={image} className="TaskForm__image" />
              <Button theme={ButtonTheme.ERROR} className="TaskForm__image-button"
                onClick={() => deleteImage?.(null)}
              >
                Удалить
              </Button>
            </div>
            :
          <UploadImage image={imageInput} setImage={setImageInput!} />
        }
      </div>

      <div className="TaskForm__block TaskForm__block--center">
        <Button
          onClick={submit}
          isLoading={isLoading}
          disabled={isButtonDisabled}
        >
          {textSubmitButton}
        </Button>
      </div>
    </Form>
  );
};
