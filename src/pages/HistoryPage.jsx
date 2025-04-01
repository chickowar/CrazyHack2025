import { getHistory } from '../mocks/api';
import TransactionItem from '../components/TransactionItem';
import {useEffect, useState} from "react";

export default function HistoryPage() {
    const user_id = localStorage.getItem('user_id');
    const [history, setHistory] = useState([]);
    useEffect(() => {
        async function load() {
            const newHistory = await getHistory(user_id);
            setHistory(newHistory);
        }
        load();
    }, []);

    return (
        <div>
            <h2>История переводов</h2>
            {history.map(tx => <TransactionItem key={tx.id} tx={tx}/>)}
        </div>
    );
}
