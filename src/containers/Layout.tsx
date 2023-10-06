import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav>
                <li>
                    <a href="/">Something</a>
                </li>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;
