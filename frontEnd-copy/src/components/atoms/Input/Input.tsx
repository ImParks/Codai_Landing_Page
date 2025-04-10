import React from "react";  
import { InputProps } from "./Input.types";
import styles from "./Input.module.css";

export const Input = React.forwardRef<HTMLInputElement, InputProps>((
    { id, type, className, placeholder,variant='default', ...props },
    ref
) => {

    const inputClassName = `${styles.input} ${styles[variant]} ${className}`;
    return (  
        <input
            id={id}
            className={`${inputClassName}`}
            type={type || 'text'}
            placeholder={placeholder}
            ref={ref}
            {...props}
        />
    );
}); 