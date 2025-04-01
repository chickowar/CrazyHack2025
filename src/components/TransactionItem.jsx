import './TransactionItem.css';
import SliceButton from './SliceButton.jsx';

export default function TransactionItem({ tx }) {
    return (
        <div className="transaction-item">
            <div>{tx.date}</div>
            <div>Сумма: {tx.amount}₽</div>
            <div>От: {tx.sender}</div>
            <div>Кому: {tx.receiver}</div>
            <div className="center">
                <SliceButton text="Отменить" />
            </div>
        </div>
    );
}
