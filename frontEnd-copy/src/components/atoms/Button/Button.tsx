import { ButtonProps } from "./Button.types";
import styles from './Button.module.css'    
export const Button: React.FC<ButtonProps> = ({
    buttonType = 'button',
    children,
    onClick,
    disabled = false,
    className = '',
    variant = 'default',
    ...rest
}) => {
    const buttonClassName = `${styles.button} ${styles[variant]} ${className}`;
    return (
        <button 
        type={buttonType} 
        className={buttonClassName} 
        onClick={onClick ? onClick : undefined}
        disabled={disabled}
        {...rest}
        >
        {children}
        </button>
    )
}