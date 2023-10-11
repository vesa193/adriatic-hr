import { Link, useLocation } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';

const ReservationDetailsModal = () => {
    const { state } = useLocation();
    const { startDate, endDate, capacity, totalPrice, title } = state;
    return (
        <main className="w-[100%] h-[100vh] grid place-items-center place-content-center gap-6">
            <p>
                Uspješno ste rezervirali smještaj <strong>{title}</strong>
            </p>
            <div className="bg-slate-100">
                <div className="p-4 pl-1 border">
                    <h4>Rezervacija</h4>
                </div>
                <div className="w-[300px] flex flex-col gap-1 border">
                    <p className="p-2 flex justify-between">
                        Ulazni datum:
                        <span>{formatDate(startDate)}</span>
                    </p>
                    <hr />

                    <p className="p-2 flex justify-between">
                        Izlazni datum:
                        <span>{formatDate(endDate)}</span>
                    </p>
                    <hr />

                    <p className="p-2 flex justify-between">
                        Broj osoba:
                        <span>{capacity}</span>
                    </p>
                    <hr />
                    <p className="p-2 flex justify-between">
                        <strong>Cena:</strong>
                        <span>{totalPrice}</span>
                    </p>
                </div>
            </div>
            <Link to="/accomodations" replace className="text-blue-400">
                Nazad
            </Link>
        </main>
    );
};

ReservationDetailsModal.displayName = 'ReservationDetailsModal';
export default ReservationDetailsModal;
