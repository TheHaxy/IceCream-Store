import React, { useState } from "react";

import { patterns } from "../../../mockdata/validationPatterns";
import { FormStateTypes } from "../../../mockdata/validationPatterns";

import inputClasses from "./Input.module.scss";

type InputType = {
  name: string;
  type: "text" | "password" | "email"
  placeholder: string;
  formState: FormStateTypes | null;
  setFormState: React.Dispatch<React.SetStateAction<FormStateTypes | null>>
};

const Input = ({
  name,
  type,
  placeholder,
  formState,
  setFormState,
}: InputType) => {
  const [isValid, setIsValid] = useState(true);

  const newInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [type]: {
        value: e.target.value,
        isValid: patterns[type].test(e.target.value),
      },
    });
    if (patterns[type].test(e.target.value)) setIsValid(true);
    else setIsValid(false);
  };
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
