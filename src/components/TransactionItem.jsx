import './TransactionItem.css';
import SliceButton from './SliceButton.jsx';
import { useState } from 'react';
import { BACKEND_PATH } from '../mocks/api.js'

export default function TransactionItem({ tx }) {
    const [status, setStatus] = useState(tx.status || 'Completed');

    const handleCancel = async () => {
        try {
            const response = await fetch(`${BACKEND_PATH}/cancel`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idOp: tx.id }),
            });

            if (response.ok) {
                setStatus('Cancelled');
                console.log(`Операция ${tx.id} успешно отменена`);
            } else {
                console.error(`Ошибка отмены операции ${tx.id}`);
            }
        } catch (error) {
            console.error('Ошибка при отправке запроса на отмену:', error);
        }
    };

    return (
        <div className="transaction-item">
            <div>{tx.date}</div>
            <div>Сумма: {tx.amount}₽</div>
            <div>От: {tx.sender}</div>
            <div>Кому: {tx.receiver}</div>
            <div className="center">
                {status === 'Cancelled' ? (
                    <div>Отменено</div>
                ) : (
                    <SliceButton onClick={handleCancel}>Отменить</SliceButton>
                )}
            </div>
        </div>
    );
}
