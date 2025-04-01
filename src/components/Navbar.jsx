import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // если выносишь стили отдельно

export default function Navbar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav style={{
            padding: '15px 0',
            background: 'var(--color-body-secondary)',
            borderBottom: '1px solid #ccc',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px'
        }}>
            <Link to="/account" className={`nav-link ${isActive('/account') ? 'active' : ''}`}>Аккаунт</Link>
            <Link to="/transfer" className={`nav-link ${isActive('/transfer') ? 'active' : ''}`}>Перевод</Link>
            <Link to="/history" className={`nav-link ${isActive('/history') ? 'active' : ''}`}>История</Link>
            <Link to="/rating" className={`nav-link ${isActive('/rating') ? 'active' : ''}`}>Рейтинг</Link>
            <Link to="/login" className={`nav-link ${isActive('/login') ? 'active' : ''}`}>Логин</Link>

        </nav>
    );
}
