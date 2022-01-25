import React from 'react';

import inputClasses from "./Input.module.scss"

const Input = ({name, type, placeholder}: { name: string, type: string, placeholder: string }) => {
    return (
        <label className={inputClasses.input_label}>
            {name}
            <input type={type} placeholder={placeholder} className={inputClasses.input}/>
        </label>

    );
};

export default Input;