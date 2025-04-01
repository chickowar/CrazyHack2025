import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccountPage from './pages/AccountPage';
import TransferPage from './pages/TransferPage';
import HistoryPage from './pages/HistoryPage';
import TestPage from './pages/TestPage';
import RegistrationPage from './pages/RegistrationPage';
import RatingPage from './pages/RatingPage'

function App() {
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
