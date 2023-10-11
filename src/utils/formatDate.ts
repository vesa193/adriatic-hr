const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

export const formatDate = (dateValue: string) => {
    const date = new Date(dateValue);
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = MONTHS?.[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
};

export const compareTwoDates = (startDate: Date, endDate: Date) => {
    // set hours, minutes, seconds, and milliseconds zero in the timestamp
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    // compare timestamp
    if (endDate >= startDate) {
        return true;
    }

    return false;
};
