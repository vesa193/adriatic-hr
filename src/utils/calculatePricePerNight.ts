export const calculatePricePerNight = (
    pricePerNight: number,
    startDate: Date,
    endDate: Date
) => {
    const days = new Date(endDate).getDate() - new Date(startDate).getDate();
    return pricePerNight * days;
};
