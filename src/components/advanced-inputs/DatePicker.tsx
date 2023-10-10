import { ChangeEvent, useEffect, useRef } from 'react';
import InputField from '../text-inputs/InputField';
import { formatDate } from '../../utils/formatDate';

type DatePickerProps = {
    name: string;
    value: string;
    label: string;
    min?: string;
    max?: string;
    helperText?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const DatePicker = ({
    name,
    value,
    label,
    min,
    max,
    helperText,
    onChange,
}: DatePickerProps) => {
    const datePickerRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (datePickerRef?.current && value === '') {
            datePickerRef?.current?.setAttribute('data-date', value);
        }

        if (datePickerRef?.current && !!value) {
            datePickerRef?.current?.setAttribute('data-date', value);
        }
    }, [value]);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (datePickerRef?.current) {
            datePickerRef?.current?.setAttribute(
                'data-date',
                formatDate(datePickerRef?.current?.value || '')
            );
        }
        onChange(e);
    };

    return (
        <InputField
            ref={datePickerRef}
            label={label}
            type="date"
            name={name}
            value={value}
            onChange={handleOnChange}
            data-date={value}
            {...(min && { min })}
            {...(max && { max })}
            {...(helperText && { helperText })}
        />
    );
};

DatePicker.displayName = 'DatePicker';
export default DatePicker;
