import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccountPage from './pages/AccountPage';
import TransferPage from './pages/TransferPage';
import HistoryPage from './pages/HistoryPage';
import TestPage from './pages/TestPage';
import RegistrationPage from './pages/RegistrationPage';
import RatingPage from './pages/RatingPage';

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const publicRoutes = ['/login', '/rating'];
        const currentPath = location.pathname;
        const user_id = localStorage.getItem('user_id');

        if (!user_id && !publicRoutes.includes(currentPath)) {
            console.warn('Нет user_id в localStorage. Редирект на /login');
            navigate('/login');
        }
    }, [location]);

    return (
        <div className="layout-wrapper">
            <Navbar />
            <main className="scrollable-content">
                <Routes>
                    <Route path="/login" element={<RegistrationPage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/transfer" element={<TransferPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/test" element={<TestPage />} />
                    <Route path="/rating" element={<RatingPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
