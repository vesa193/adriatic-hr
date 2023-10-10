import { FormEvent } from 'react';
import DatePicker from '../components/advanced-inputs/DatePicker';
import InputField from '../components/text-inputs/InputField';
import AccomodationCard, { IAccomodation } from '../features/AccomodationCard';
import useAccomodation from './hooks/useAccomodations';
import { useForm } from './hooks/useForm';
import BaseButton from '../components/buttons/BaseButton';
import { useSearchParams } from 'react-router-dom';

export const HomeScreen = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { accommodations, isLoadingAccomodations } = useAccomodation();
    const { fields, onChange } = useForm({
        startDate: '',
        endDate: '',
        capacity: '',
        maxPricePerNight: '',
    });

    const isRegularScheduleDate =
        new Date(fields?.startDate) < new Date(fields?.endDate);

    if (isLoadingAccomodations) {
        return <p>Loading...</p>;
    }

    const isButtonDisabled = !fields?.startDate || !fields?.endDate;

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            startDate: fields?.startDate ? fields?.startData : '',
            endDate: fields?.endDate ? fields?.endDate : '',
            ...(fields?.capacity && { capacity: fields.capacity }),
            ...(fields?.maxPricePerNight && {
                maxPricePerNight: fields.maxPricePerNight,
            }),
        };

        console.log('formData', formData);
        setSearchParams(formData);
    };

    return (
        <>
            <section className="sticky top-0 z-10 bg-white p-4 mb-10">
                <form
                    className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4"
                    onSubmit={handleOnSubmit}
                >
                    <DatePicker
                        name="startDate"
                        value={fields?.startDate || ''}
                        label="Start date"
                        onChange={onChange}
                        min="2024-01-01"
                        max="2024-12-31"
                    />
                    <DatePicker
                        name="endDate"
                        value={fields?.endDate || ''}
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
                        value={fields?.capacity || ''}
                        onChange={onChange}
                    />
                    <InputField
                        type="number"
                        label="Max price per night"
                        name="maxPricePerNight"
                        value={fields?.maxPricePerNight || ''}
                        onChange={onChange}
                    />
                    <BaseButton
                        type="submit"
                        variant="contained"
                        isDisabled={!isRegularScheduleDate || isButtonDisabled}
                    >
                        Search
                    </BaseButton>
                </form>
            </section>
            <main className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 p-4 place-items-center items-stretch">
                {!!accommodations?.length &&
                    accommodations?.map((accomodation: IAccomodation) => {
                        return (
                            <AccomodationCard
                                key={accomodation?.id}
                                {...accomodation}
                            />
                        );
                    })}
            </main>
        </>
    );
};
