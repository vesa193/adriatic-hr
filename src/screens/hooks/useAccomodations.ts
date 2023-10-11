import { useQuery } from 'react-query';
import { getAccomodations } from '../../api/api';

const useAccomodation = () => {
    const { data: accomodations, isLoading: isLoadingAccomodations } = useQuery(
        'accomodation',
        getAccomodations
    );

    return { accomodations, isLoadingAccomodations };
};

export default useAccomodation;
