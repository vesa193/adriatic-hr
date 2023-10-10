import { useSearchParams } from 'react-router-dom';
import DatePicker from '../components/advanced-inputs/DatePicker';
import InputField from '../components/text-inputs/InputField';
import { IFormData } from '../screens/HomeScreen';
import { ChangeEvent, FormEvent, memo } from 'react';
import BaseButton from '../components/buttons/BaseButton';

type FilterAccomodationProps = {
    fields: IFormData;
    handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleResetFilter: () => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FilterAccomodation = ({
    fields,
    handleOnSubmit,
    handleResetFilter,
    onChange,
}: FilterAccomodationProps) => {
    const [searchParams] = useSearchParams();
    const isRegularScheduleDate =
        new Date(fields?.startDate) < new Date(fields?.endDate);

    const isButtonDisabled =
        searchParams.get('startDate') ||
        fields?.startDate ||
        searchParams.get('endDate') ||
        fields?.endDate;

    return (
        <section className="sticky top-0 z-10 bg-white p-4 mb-10">
            <form
                className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4"
                onSubmit={handleOnSubmit}
            >
                <DatePicker
                    name="startDate"
                    value={
                        searchParams.get('startDate') || fields?.startDate || ''
                    }
                    label="Start date"
                    onChange={onChange}
                    min="2024-01-01"
                    max="2024-12-31"
                />
                <DatePicker
                    name="endDate"
                    value={searchParams.get('endDate') || fields?.endDate || ''}
                    label="End date"
                    onChange={onChange}
                    min="2024-01-01"
                    max="2024-12-31"
                    helperText={
                        !!fields?.endDate && !isRegularScheduleDate
                            ? 'End date should be set after start date'
                            : ''
                    }
                />
                <InputField
                    type="number"
                    label="Capacity"
                    name="capacity"
                    value={
                        searchParams.get('capacity') || fields?.capacity || ''
                    }
                    onChange={onChange}
                />
                <InputField
                    type="number"
                    label="Max price per night"
                    name="maxPricePerNight"
                    value={
                        searchParams.get('maxPricePerNight') ||
                        fields?.maxPricePerNight ||
                        ''
                    }
                    onChange={onChange}
                />
                <div className="grid grid-cols-[repeat(2,50%)] gap-2">
                    <BaseButton
                        type="submit"
                        variant="contained"
                        isDisabled={!isRegularScheduleDate || !isButtonDisabled}
                    >
                        Search
                    </BaseButton>
                    <BaseButton
                        type="reset"
                        variant="contained"
                        isDisabled={!isRegularScheduleDate}
                        onClick={handleResetFilter}
                    >
                        Clear
                    </BaseButton>
                </div>
            </form>
        </section>
    );
};

FilterAccomodation.diplayName = 'FilterAccomodation';
export default memo(FilterAccomodation);
