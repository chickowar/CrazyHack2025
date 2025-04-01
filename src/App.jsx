import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccountPage from './pages/AccountPage';
import TransferPage from './pages/TransferPage';
import HistoryPage from './pages/HistoryPage';
import TestPage from './pages/TestPage';

function App() {
    return (
        <div className="layout-wrapper">
            <Navbar />
            <main className="scrollable-content">
                <Routes>
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/transfer" element={<TransferPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/test" element={<TestPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
