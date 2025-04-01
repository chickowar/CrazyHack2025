import { getHistory } from '../mocks/api';
import TransactionItem from '../components/TransactionItem';

export default function HistoryPage() {
    const history = getHistory();

    return (
        <div>
            <h2>История переводов</h2>
            {history.map(tx => <TransactionItem key={tx.id} tx={tx} />)}
        </div>
    );
}
