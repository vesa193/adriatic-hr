import { FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import AccomodationCard, { IAccomodation } from '../features/AccomodationCard';
import FilterAccomodation from '../features/FilterAccomodation';
import useAccomodation from './hooks/useAccomodations';
import { useForm } from './hooks/useForm';

export type IFormData = {
    startDate: string;
    endDate: string;
    capacity: string;
    maxPricePerNight: string;
};

const HomeScreen = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { accommodations, isLoadingAccomodations } = useAccomodation();

    console.log('accommodations', accommodations);

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

    if (isLoadingAccomodations) {
        return <p>Loading...</p>;
    }

    const handleSearchFilter = (e: FormEvent<HTMLFormElement>) => {
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

    // const handleReservation = (reservateDate: IReservateDate) => {
    //     console.log('reservateDate', reservateDate);
    //     navigate({ search }, { state: reservateDate });
    // };

    // const filterAccomodations = accommodations?.filter(
    //     (accomodation: IAccomodation) => {
    //         return accomodation.capacity === +searchParams.get('capacity')!
    //             ? true
    //             : false;
    //     }
    // );

    const filterPriceListInEuros = accommodations.map(
        (element: IAccomodation) => {
            return {
                ...element,
                pricelistInEuros: element.pricelistInEuros.filter(
                    (priceitemInEuros) =>
                        priceitemInEuros.pricePerNight ===
                        +searchParams.get('maxPricePerNight')!
                ),
            };
        }
    );

    const elements = filterPriceListInEuros?.filter(
        (item: IAccomodation) => !!item.pricelistInEuros.length
    );

    console.log('elements', elements);

    return (
        <>
            <FilterAccomodation
                fields={fields}
                handleSearchFilter={handleSearchFilter}
                handleResetFilter={handleResetFilter}
                onChange={onChange}
            />
            <main className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 p-4 place-items-center items-stretch">
                {!!elements?.length
                    ? elements?.map((accomodation: IAccomodation) => {
                          return (
                              <AccomodationCard
                                  key={accomodation?.id}
                                  {...accomodation}
                              />
                          );
                      })
                    : !!accommodations?.length &&
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
