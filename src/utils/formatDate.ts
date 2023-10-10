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
