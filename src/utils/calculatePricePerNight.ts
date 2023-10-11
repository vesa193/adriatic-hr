export const calculatePricePerNight = (
    pricePerNight: number,
    startDate: Date,
    endDate: Date
) => {
    const differenceInTime =
        new Date(endDate).getTime() - new Date(startDate).getTime();
    let nights = Math.round(differenceInTime / (1000 * 3600 * 24));
    nights = nights > 0 ? nights : 1;

    return pricePerNight * nights;
};
