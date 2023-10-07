import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/navigation/NavigationBar';

const Layout = () => {
    return (
        <>
            <NavigationBar />
            <Outlet />
        </>
    );
};

export default Layout;
