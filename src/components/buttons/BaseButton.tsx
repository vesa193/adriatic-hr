import { ReactNode } from 'react';
import style from './BaseButton.module.css';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonWidth = 'full' | 'normal';
type ButtonVariant = 'outlined' | 'contained';

type ButtonBaseProps = {
    type?: ButtonType;
    children: ReactNode;
    onClick?: () => void;
    width?: ButtonWidth;
    isDisabled?: boolean;
    variant?: ButtonVariant;
    capitalize?: boolean;
};

const BaseButton = ({
    children,
    type,
    width,
    variant,
    isDisabled,
    capitalize,
    onClick,
}: ButtonBaseProps) => {
    return (
        <button
            className={`${style.baseButton} ${
                width === 'full' ? style.fullWidth : ''
            } ${variant === 'outlined' ? style.baseButtonOutlined : ''} ${
                capitalize ? style.baseButtonCapitalize : ''
            }`}
            type={type || 'button'}
            {...(isDisabled && { disabled: isDisabled })}
            {...(onClick && { onClick })}
        >
            {children}
        </button>
    );
};

BaseButton.displayName = 'BaseButtton';
export default BaseButton;
