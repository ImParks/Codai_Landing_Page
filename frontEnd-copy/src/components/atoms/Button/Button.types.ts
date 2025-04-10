export interface ButtonProps {
    buttonType: "button" | "submit" | "reset";
    variant? : 'default' | 'login' | 'nav' | 'icon'| 'social'| 'dropdown' | 'service' | 'userGuide';
    className?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}


