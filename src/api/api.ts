import axios from 'axios';
export const baseURL = 'https://api.adriatic.hr/test/accommodation';

const axiosInstance = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Content-Type': 'application/json',
    },
});

const getAccomodations = async () => {
    try {
        const response = await axiosInstance.get(
            `https://cors-anywhere.herokuapp.com/${baseURL}`
        );

        if (response.status > 200) {
            throw new Error('Something went wrong in request');
        }

        return response.data;
    } catch (error: any) {
        console.log('Err: ', error);
        console.error('Error: ', error.message);
    }
};

export { getAccomodations };
