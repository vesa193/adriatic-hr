import {
    faDog,
    faInfo,
    faPeopleGroup,
    faSquareParking,
    faTemperatureLow,
    faTv,
    faUmbrellaBeach,
    faWaterLadder,
    faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo, useState } from 'react';
import photo1 from '../assets/images/photo1.jpeg';
import { formatCurrency } from '../utils/formatCurrency';

type Amenity = {
    airConditioning: boolean;
    parkingSpace: boolean;
    pets: boolean;
    pool: boolean;
    tv: boolean;
    wifi: boolean;
};

type AvailableDates = {
    intervalEnd: string;
    intervalStart: string;
};

type PricelistInEuros = {
    intervalEnd: string;
    intervalStart: string;
    pricePerNight: number;
};

export type IAccomodation = {
    amenities: Amenity;
    availableDates: AvailableDates[];
    pricelistInEuros: PricelistInEuros[];
    beachDistanceInMeters: number;
    capacity: number;
    id: number;
    image: string;
    title: string;
};

type AccomodationCardProps = IAccomodation;

const amenityType = {
    airConditioning: faTemperatureLow,
    parkingSpace: faSquareParking,
    pets: faDog,
    pool: faWaterLadder,
    tv: faTv,
    wifi: faWifi,
};

const AccomodationCard = ({
    title,
    image,
    capacity,
    beachDistanceInMeters,
    amenities,
    pricelistInEuros,
}: AccomodationCardProps) => {
    const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false);
    const minPrice = Math.min(
        ...pricelistInEuros?.map(
            (pricelistInEuro: PricelistInEuros) => pricelistInEuro.pricePerNight
        )
    );
    const maxPrice = Math.max(
        ...pricelistInEuros?.map(
            (pricelistInEuro: PricelistInEuros) => pricelistInEuro.pricePerNight
        )
    );
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden relative"
                style={{ backgroundImage: `url(${image ? image : photo1})` }}
                title={title ? title : ''}
            >
                <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)] rounded-t lg:rounded-t-none lg:rounded-l"></div>
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                        {title ? title : ''}
                    </div>

                    <>
                        {capacity ? (
                            <p className="text-gray-700 text-base">
                                <span className="mr-1">
                                    Max {capacity > 1 ? 'Persons' : 'Persons'}{' '}
                                    {capacity}
                                </span>
                                <FontAwesomeIcon icon={faPeopleGroup} />
                            </p>
                        ) : null}
                        {beachDistanceInMeters ? (
                            <>
                                <div className="text-gray-700 text-base">
                                    <span className="mr-1">
                                        Beach distance {beachDistanceInMeters}m
                                    </span>
                                    <FontAwesomeIcon icon={faUmbrellaBeach} />
                                </div>
                            </>
                        ) : null}
                        <div
                            className={`${
                                isMoreOpen ? 'flex' : 'hidden'
                            } flex-col`}
                        >
                            <div className="flex gap-2 mt-4 mb-4">
                                <FontAwesomeIcon
                                    icon={amenityType.airConditioning}
                                    color={
                                        amenities?.airConditioning
                                            ? 'var(--blue-color)'
                                            : 'var(--grey-color)'
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={amenityType.parkingSpace}
                                    color={
                                        amenities?.parkingSpace
                                            ? 'var(--blue-color)'
                                            : 'var(--grey-color)'
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={amenityType.pets}
                                    color={
                                        amenities?.pets
                                            ? 'var(--blue-color)'
                                            : 'var(--grey-color)'
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={amenityType.pool}
                                    color={
                                        amenities?.pool
                                            ? 'var(--blue-color)'
                                            : 'var(--grey-color)'
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={amenityType.tv}
                                    color={
                                        amenities?.tv
                                            ? 'var(--blue-color)'
                                            : 'var(--grey-color)'
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={amenityType.wifi}
                                    color={
                                        amenities?.wifi
                                            ? 'var(--blue-color)'
                                            : 'var(--grey-color)'
                                    }
                                />
                            </div>
                            <div>
                                <p>
                                    {minPrice === maxPrice
                                        ? formatCurrency(minPrice)
                                        : `${formatCurrency(
                                              minPrice
                                          )} - ${formatCurrency(maxPrice)}`}
                                </p>
                            </div>
                            <div className="text-gray-400 text-sm flex mt-4">
                                <div className="w-[24px] h-[24px] rounded-[50%] border-slate-400 mr-1">
                                    <FontAwesomeIcon icon={faInfo} />
                                </div>
                                <i>
                                    Korisnik treba odabrati datume boravka da bi
                                    mogao vidjeti točnu cijenu i rezervirati
                                    smještaj{' '}
                                </i>
                            </div>
                        </div>
                        <p
                            role="button"
                            className="text-base mt-10 text-blue-400 cursor-pointer inline-block"
                            onClick={() => setIsMoreOpen(!isMoreOpen)}
                        >
                            {!isMoreOpen ? 'more...' : 'less'}
                        </p>
                    </>
                </div>
            </div>
        </div>
    );
};

AccomodationCard.displayName = 'AccomodationCard';
export default memo(AccomodationCard);
