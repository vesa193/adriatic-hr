import { useSearchParams } from 'react-router-dom';
import DatePicker from '../components/advanced-inputs/DatePicker';
import InputField from '../components/text-inputs/InputField';
import { IFormData } from '../screens/HomeScreen';
import { ChangeEvent, FormEvent, memo } from 'react';
import BaseButton from '../components/buttons/BaseButton';

type FilterAccomodationProps = {
    fields: IFormData;
    handleSearchFilter: (e: FormEvent<HTMLFormElement>) => void;
    handleResetFilter: () => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FilterAccomodation = ({
    fields,
    handleSearchFilter,
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
            <h4 className="font-bold mb-4">Filter</h4>
            <form
                className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4"
                onSubmit={handleSearchFilter}
            >
                <DatePicker
                    name="startDate"
                    value={
                        fields?.startDate || searchParams.get('startDate') || ''
                    }
                    label="Pocetni datum"
                    onChange={onChange}
                    min="2024-01-01"
                    max="2024-12-31"
                />
                <DatePicker
                    name="endDate"
                    value={fields?.endDate || searchParams.get('endDate') || ''}
                    label="Krajnji datum"
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
                    label="Br. osoba"
                    name="capacity"
                    value={
                        fields?.capacity || searchParams.get('capacity') || ''
                    }
                    onChange={onChange}
                />
                <InputField
                    type="number"
                    label="Maksimalna cena po nocenju"
                    name="maxPricePerNight"
                    value={
                        fields?.maxPricePerNight ||
                        searchParams.get('maxPricePerNight') ||
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
                        Pretrazi
                    </BaseButton>
                    <BaseButton
                        type="reset"
                        variant="contained"
                        isDisabled={!isRegularScheduleDate}
                        onClick={handleResetFilter}
                    >
                        Ocisti
                    </BaseButton>
                </div>
            </form>
        </section>
    );
};

FilterAccomodation.diplayName = 'FilterAccomodation';
export default memo(FilterAccomodation);
