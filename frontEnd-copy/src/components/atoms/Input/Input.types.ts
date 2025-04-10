import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    type: 'text' | 'password' | 'email' | 'number' | 'checkbox' | 'radio' | 'date';
    className?: string;
    placeholder: string;
    variant: 'default' | 'loginInput' |  'checkbox';
}
