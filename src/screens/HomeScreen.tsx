import AccomodationCard, { IAccomodation } from '../features/AccomodationCard';
import useAccomodation from './hooks/useAccomodations';

const HomeScreen = () => {
    const { accommodations, isLoadingAccomodations } = useAccomodation();

    if (isLoadingAccomodations) {
        return <p>Loading...</p>;
    }

    return (
        <>
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
