import { ChangeEvent, EventHandler, FormEvent } from 'react';
import DatePicker from '../components/advanced-inputs/DatePicker';
import InputField from '../components/text-inputs/InputField';
import AccomodationCard, { IAccomodation } from '../features/AccomodationCard';
import useAccomodation from './hooks/useAccomodations';
import { useForm } from './hooks/useForm';
import BaseButton from '../components/buttons/BaseButton';
import { useSearchParams } from 'react-router-dom';

type IFormData = {
    startDate: string;
    endDate: string;
    capacity: string;
    maxPricePerNight: string;
};

const HomeScreen = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { accommodations, isLoadingAccomodations } = useAccomodation();
    const { fields, onChange } = useForm({
        startDate: searchParams.get('startDate') || '',
        endDate: searchParams.get('endDate') || '',
        capacity: searchParams.get('capacity') || '',
        maxPricePerNight: searchParams.get('maxPricePerNight') || '',
    });

    console.log(searchParams.toString());

    const isRegularScheduleDate =
        new Date(fields?.startDate) < new Date(fields?.endDate);

    const isButtonDisabled =
        !fields?.startDate ||
        !fields?.endDate ||
        !searchParams.get('startDate') ||
        !searchParams.get('endDate');
    console.log(isButtonDisabled, isRegularScheduleDate);

    if (isLoadingAccomodations) {
        return <p>Loading...</p>;
    }

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            startDate: fields?.startDate || '',
            endDate: fields?.endDate || '',
            capacity: fields?.capacity || '',
            maxPricePerNight: fields?.maxPricePerNight || '',
        };

        setSearchParams(formData);
    };

    return (
        <>
            <section className="sticky top-0 z-10 bg-white p-4 mb-10">
                <form
                    className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4"
                    onSubmit={(e: FormEvent<HTMLFormElement>) =>
                        handleOnSubmit(e)
                    }
                >
                    <DatePicker
                        name="startDate"
                        value={
                            searchParams.get('startDate') ||
                            fields?.startDate ||
                            ''
                        }
                        label="Start date"
                        onChange={onChange}
                        min="2024-01-01"
                        max="2024-12-31"
                    />
                    <DatePicker
                        name="endDate"
                        value={
                            searchParams.get('endDate') || fields?.endDate || ''
                        }
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
                            searchParams.get('capacity') ||
                            fields?.capacity ||
                            ''
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

export default HomeScreen;
