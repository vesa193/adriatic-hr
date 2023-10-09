import { useQuery } from 'react-query';
import { getAccomodations } from '../../api/api';

const useAccomodation = () => {
    const { data: accommodations, isLoading: isLoadingAccomodations } =
        useQuery('accomodation', getAccomodations);

    return { accommodations, isLoadingAccomodations };
};

export default useAccomodation;
