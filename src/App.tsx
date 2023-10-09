import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './containers/Layout';
import HomeScreen from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/accomodations" />} />
                <Route path="/accomodations" element={<Layout />}>
                    <Route index element={<HomeScreen />} />
                </Route>
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </>
    );
}

export default App;
