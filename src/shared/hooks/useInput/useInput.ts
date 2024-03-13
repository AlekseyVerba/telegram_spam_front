import { useState, useEffect, ChangeEvent } from "react";

interface IvalidateOptions {
    lengthMin?: {
        value: number,
        message?: string
    },
    lengthMax?: {
        value: number,
        message?: string
    },
    isEmail?: {
        message?: string 
    },
    isString?: {
        message?:string
    },
    isAplha?: {
        message?: string
    },
    isPhone?: {
        message?: string
    },
    isCron?: {
        message?: string
    }
}

export interface useInputReturn {
    value: string;
    changeHadnlerInput: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error: string | null | undefined;
    isClearBlur: boolean;
    handlerChangeBlur: () => void;
    clearValue: () => void;
    changeValue: (value: string) => void
}

export const useInput = (
        defaultValue: string,
        validateOptions: IvalidateOptions,
        changeFun?: (value: string) => void,
    ): useInputReturn => {
    const [value, setValue] = useState<string>(defaultValue)
    const [isClearBlur, setIsClearBlur] = useState<boolean>(false)

    const [error, setError] = useState<string | null | undefined>()

    useEffect(() => {
        setError(undefined)
        if (validateOptions.lengthMax) {

            if (value.length > validateOptions.lengthMax.value) {
                setError(validateOptions.lengthMax.message || `Максимальное длина: ${validateOptions.lengthMax.value}`)
            }

        }

        if (validateOptions.lengthMin) {

            if (value.length < validateOptions.lengthMin.value) {
                setError(validateOptions.lengthMin.message || `Минимальная длина: ${validateOptions.lengthMin.value}`)
            }

        }

        if (validateOptions.isAplha) {

            if (!/^(0|[1-9]\d*)$/.test(value)) {
                setError(validateOptions.isAplha.message || 'Поле должно быть числом')
            }

        }

        if (validateOptions.isEmail) {
            let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if (reg.test(value) == false) {
                setError(validateOptions.isEmail.message || 'Поле должно быть почтой')
            }

        }

        if (validateOptions.isPhone) {
            const reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

            if (reg.test(value) == false) {
                setError(validateOptions.isPhone.message || 'Поле должно быть телефоном')
            }
        }

        if (validateOptions.isCron) {
            const reg = /^(\*|([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])|\*\/([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])) (\*|([0-9]|1[0-9]|2[0-3])|\*\/([0-9]|1[0-9]|2[0-3])) (\*|([1-9]|1[0-9]|2[0-9]|3[0-1])|\*\/([1-9]|1[0-9]|2[0-9]|3[0-1])) (\*|([1-9]|1[0-2])|\*\/([1-9]|1[0-2])) (\*|([0-6])|\*\/([0-6]))$/;

            if (reg.test(value) == false) {
                setError(validateOptions.isCron.message || 'Поле должно быть cron схемой')
            }
        }

    }, [value])

    const changeValue = (value: string) => {
        setValue(value)
        if (changeFun) {
            changeFun(value)
        }
    }


    const changeHadnlerInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        changeValue(event.target.value)
    }


    const handlerChangeBlur = () => {
        setIsClearBlur(true)
    }

    const clearValue = () => {
        changeValue("")
        setIsClearBlur(false)
    }


    return {
        value,
        changeHadnlerInput,
        error,
        isClearBlur,
        handlerChangeBlur,
        clearValue,
        changeValue
    }

}