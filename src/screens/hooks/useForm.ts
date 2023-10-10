import { ChangeEvent, useCallback, useState } from 'react';

const useForm = (initialState: any) => {
    const [fields, setFields] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setErrors(initialState);
            setFields({
                ...fields,
                [e.target.name]: e.target.value,
            });
        },
        [fields]
    );

    const handleReset = () => {
        const emptyInitialValues = Object.keys((key: string) => ({
            [key]: '',
        }));
        setFields(emptyInitialValues);
        setErrors(emptyInitialValues);
    };

    return {
        fields,
        onChange: handleChange,
        onReset: handleReset,
        errors,
        setErrors,
    };
};

export { useForm };
