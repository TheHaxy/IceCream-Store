import React, {BaseSyntheticEvent, useState} from 'react';

import inputClasses from "./Input.module.scss"

import {patterns} from "../../../mockdata/validationPatterns"

import {FormStateTypes} from "../../../mockdata/validationPatterns"

const Input = ({
                   name,
                   type,
                   placeholder,
                   formState,
                   setFormState,
                   inputValue,
                   setInputValue,
               }: { name: string, type: string, placeholder: string, formState: FormStateTypes | null, setFormState: any, inputValue: string, setInputValue: any }) => {
    const [isValid, setIsValid] = useState(true)

    const newInputValue = (e: BaseSyntheticEvent) => {
        if (!inputValue) {
            setFormState({
                ...formState,
                [type]: {
                    value: e.target.value,
                    isValid: patterns[type].test(e.target.value)
                }
            })
            if (patterns[type].test(e.target.value)) setIsValid(true)
            else setIsValid(false)
        }
    }
    return (
        <label className={inputClasses.input_label}>
            {name}
            <input
                type={type}
                placeholder={placeholder}
                className={inputClasses[`input__${isValid}`]}
                onChange={(e) => newInputValue(e)}
            />
        </label>

    );
};

export default Input;