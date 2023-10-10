import { Link, useLocation } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';

const ReservationDetailsModal = () => {
    const { state } = useLocation();
    console.log('sss', state);
    const { startDate, endDate, capacity, totalPrice } = state;
    return (
        <main className="w-[100%] h-[100vh] grid place-items-center">
            <div className="bg-slate-100">
                <div className="p-4 pl-1 border">
                    <h4>Reservation Details</h4>
                </div>
                <div className="w-[300px] flex flex-col gap-1 border">
                    <p className="p-1 flex justify-between">
                        Start Date:
                        <span>{formatDate(startDate)}</span>
                    </p>
                    <hr />

                    <p className="p-1 flex justify-between">
                        End Date:
                        <span>{formatDate(endDate)}</span>
                    </p>
                    <hr />

                    <p className="p-1 flex justify-between">
                        Persons:
                        <span>{capacity}</span>
                    </p>
                    <hr />
                    <p className="p-1 flex justify-between">
                        <strong>Total Price</strong>
                        <span>{totalPrice}</span>
                    </p>
                </div>
            </div>
            <Link to="/accomodations" replace>
                Go Back
            </Link>
        </main>
    );
};

ReservationDetailsModal.displayName = 'ReservationDetailsModal';
export default ReservationDetailsModal;
