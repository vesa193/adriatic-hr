import { AvailableDates, PricelistInEuros } from '../features/AccomodationCard';
import { compareTwoDates } from './formatDate';

const filterPerAvailableDates = (
    availableDates: AvailableDates[],
    startDateQuery: string,
    endDateQuery: string
) => {
    return availableDates.some((availableDate) => {
        return (
            compareTwoDates(
                new Date(availableDate.intervalStart),
                new Date(startDateQuery!)
            ) &&
            compareTwoDates(
                new Date(availableDate.intervalEnd),
                new Date(endDateQuery!)
            )
        );
    });
};

const filterPerMaxPricePerNight = (
    priceListInEuros: PricelistInEuros[],
    maxPricePerNightQuery: string
) => {
    return priceListInEuros.some((priceItem) => {
        return priceItem.pricePerNight <= +maxPricePerNightQuery!;
    });
};

export { filterPerAvailableDates, filterPerMaxPricePerNight };
