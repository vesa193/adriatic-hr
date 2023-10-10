import { ChangeEvent, ReactNode, Ref, forwardRef, memo } from 'react';
import style from './InputField.module.css';
import InputLabel from './InputLabel';

type InputFieldProps = {
    type: string;
    name: string;
    value: string;
    label?: string;
    placeholder?: string;
    readOnly?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    helperText?: ReactNode;
    min?: string | number;
    max?: string | number;
};

const InputField = forwardRef(
    (
        {
            type,
            value,
            name,
            label,
            placeholder,
            readOnly,
            onChange,
            helperText,
            min,
            max,
        }: InputFieldProps,
        ref: Ref<HTMLInputElement>
    ) => {
        return (
            <div className={style.inputFieldWrapper}>
                <div
                    className={`${style.inputField} ${
                        readOnly ? style.inputFieldReadOnly : ''
                    } ${!!helperText ? style.redBorder : ''}`}
                >
                    {!placeholder ? (
                        <InputLabel isInputFocused={!value} name={name}>
                            {label}
                        </InputLabel>
                    ) : null}
                    <input
                        ref={ref}
                        name={name}
                        type={type}
                        value={value}
                        onChange={onChange}
                        {...(placeholder && { placeholder })}
                        {...(readOnly && { readOnly })}
                        {...(min && { min })}
                        {...(max && { max })}
                        autoComplete="off"
                    />
                </div>
                {!!helperText ? (
                    <p className="text-red-400">{helperText}</p>
                ) : null}
            </div>
        );
    }
);

InputField.displayName = 'InputField';
export default memo(InputField);
