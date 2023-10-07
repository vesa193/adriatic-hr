import { Link } from 'react-router-dom';
import adriaticHrLogo from '../../assets/images/logo-adriatic-hr.svg';

const NavigationBar = () => {
    return (
        <nav className="bg-slate-900 border-gray-200 dark:bg-gray-900 px-1">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/">
                    <img
                        src={adriaticHrLogo}
                        className="h-10"
                        alt="Adriatic.hr Logo"
                    />
                </Link>
            </div>
        </nav>
    );
};

NavigationBar.displayName = 'Navigation';
export default NavigationBar;
