import { ChangeEvent, useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useForm = (initialState: any) => {
    const [fields, setFields] = useState(initialState);
    const [errors, setErrors] = useState(initialState);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setErrors(initialState);
            setFields({
                ...fields,
                [e.target.name]: e.target.value,
            });

            if (!e.target.value) {
                searchParams.delete(e.target.name);
                setSearchParams(searchParams);
            }
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
