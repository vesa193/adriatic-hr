export const calculatePricePerNight = (
    pricePerNight: number,
    startDate: Date,
    endDate: Date
) => {
    const differenceInTime =
        new Date(endDate).getTime() - new Date(startDate).getTime();
    const days = differenceInTime / (1000 * 3600 * 24);
    return pricePerNight * days;
};
