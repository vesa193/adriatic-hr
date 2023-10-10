import { ChangeEvent, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import DatePicker from '../components/advanced-inputs/DatePicker';
import BaseButton from '../components/buttons/BaseButton';
import InputField from '../components/text-inputs/InputField';
import AccomodationCard, { IAccomodation } from '../features/AccomodationCard';
import useAccomodation from './hooks/useAccomodations';
import { useForm } from './hooks/useForm';
import FilterAccomodation from '../features/FilterAccomodation';

export type IFormData = {
    startDate: string;
    endDate: string;
    capacity: string;
    maxPricePerNight: string;
};

const HomeScreen = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { accommodations, isLoadingAccomodations } = useAccomodation();

    const { fields, onChange, onReset } = useForm({
        startDate: !!searchParams.get('startDate')
            ? searchParams.get('startDate')
            : '',
        endDate: !!searchParams.get('endDate')
            ? searchParams.get('endDate')
            : '',
        capacity: !!searchParams.get('capacity')
            ? searchParams.get('capacity')
            : '',
        maxPricePerNight: searchParams.get('maxPricePerNight')
            ? searchParams.get('maxPricePerNight')
            : '',
    });

    const isRegularScheduleDate =
        new Date(fields?.startDate) < new Date(fields?.endDate);

    const isButtonDisabled =
        searchParams.get('startDate') ||
        fields?.startDate ||
        searchParams.get('endDate') ||
        fields?.endDate;

    if (isLoadingAccomodations) {
        return <p>Loading...</p>;
    }

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            startDate: fields?.startDate || '',
            endDate: fields?.endDate || '',
            ...(fields?.capacity && { capacity: fields.capacity }),
            ...(fields?.maxPricePerNight && {
                maxPricePerNight: fields.maxPricePerNight,
            }),
        };

        setSearchParams(formData);
    };

    const handleResetFilter = () => {
        searchParams.delete('startDate');
        searchParams.delete('endDate');
        searchParams.delete('capacity');
        searchParams.delete('maxPricePerNight');
        setSearchParams(searchParams);
        onReset();
    };

    return (
        <>
            <FilterAccomodation
                fields={fields}
                handleOnSubmit={handleOnSubmit}
                handleResetFilter={handleResetFilter}
                onChange={onChange}
            />
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

HomeScreen.displayName = 'HomeScreen';
export default HomeScreen;
