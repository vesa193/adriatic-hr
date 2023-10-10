import { ReactNode } from 'react';
import style from './InputLabel.module.css';

type InputLabelProps = {
    name: string;
    children: ReactNode;
    isInputFocused: boolean;
    className?: string;
};

const InputLabel = ({
    name,
    children,
    className,
    isInputFocused,
}: InputLabelProps) => {
    const withNoInputValueClass = isInputFocused ? style.withNoInputValue : '';
    return (
        <label
            className={`${style.inputLabel} ${withNoInputValueClass} ${
                className ? className : ''
            }`}
            htmlFor={name}
        >
            {children}
        </label>
    );
};
InputLabel.displayName = 'InputLabel';
export default InputLabel;
