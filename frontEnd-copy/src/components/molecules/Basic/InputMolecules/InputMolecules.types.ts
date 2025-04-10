export interface InputMoleculesProps {
    inputId: string;
    type: 'text' | 'password' | 'email' | 'number' | 'checkbox' | 'radio' | 'date';
    className?: string;
    placeholderText: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    message?: string;
    image?: string;
    iconToggle?: () => void;
    value?: string;
    variant?: 'loginInput' | 'default';
}
