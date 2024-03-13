import { Dispatch, SetStateAction, useState } from "react";
import { InputObject } from "../model/types/dynamicInputFields";
import { Input } from "shared/components/Input";
import { Title, TitleSizeEnum } from "shared/components/Title";
import { Button, ButtonTheme } from "shared/components/Button";
import './DynamicInputFields.scss'

interface Props {
    inputs: string[]
    setInputs: (arg: string[]) => void
}

export const DynamicInputFields = (props: Props) => {
    const { inputs, setInputs } = props

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    let { value } = event.target;
    let onChangeValue = [...inputs];

    onChangeValue[index] = value;
    setInputs(onChangeValue);
  };

  const handleDeleteInput = (index: number) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  };


  return (
    <div className="DynamicInputFields">
        <Title size={TitleSizeEnum.SMALL}>Чаты Группы Пользователи</Title>
      {inputs.map((item, index) => (
        <div className="DynamicInputFields__input-container" key={index}>
          <Input isClearBlur={false} isStatusShow={false} value={item} onChange={(event) => handleChange(event, index)}/>

          
          {inputs.length > 1 && (
            <Button className="button-delete" theme={ButtonTheme.ERROR} onClick={() => handleDeleteInput(index)}>Удалить</Button>
          )}
          {index === inputs.length - 1 && (
            <div className="DynamicInputFields__wrapper-add">
                <Button onClick={() => handleAddInput()}>Добавить</Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
