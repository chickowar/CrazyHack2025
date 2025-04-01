import { useState } from 'react';
import { sendMoney, receiveMoney } from '../mocks/api';

export default function TransferPage() {
    const [mode, setMode] = useState(null); // 'deposit' | 'send'
    const [subMode, setSubMode] = useState(null); // 'sky' | 'from-other'

    const [amount, setAmount] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const user_id = localStorage.getItem('user_id');

    const [alert, setAlert] = useState(null);
    const showError = (message) => {
        setAlert(message);
        setTimeout(() => setAlert(null), 4000);
    };

    const resetFields = () => {
        setAmount('');
        setFrom('');
        setTo('');
    };

    const handleSkyDeposit = async () => {
        const num = parseFloat(amount);
        if (isNaN(num) || num <= 0 || num > 50) {
            showError("Значение должно быть числом от 0 до 50");
        } else {
            try {
                await receiveMoney(user_id, num);
            } catch (err) {
                showError(err.message);
            }
        }
    };

    const handleDepositFromOther = async () => {
        const num = parseFloat(amount);
        if (isNaN(num) || num <= 0) {
            showError("Сумма некорректна");
            return;
        }
        if (!from) {
            showError("Не указан отправитель (from)");
            return;
        }
        try {
            await sendMoney(from, to || user_id, num);
        } catch (err) {
            showError(err.message);
        }
    };

    const handleSend = async () => {
        const num = parseFloat(amount);
        if (isNaN(num) || num <= 0) {
            showError("Сумма некорректна");
            return;
        }
        if (!to) {
            showError("Не указан получатель (to)");
            return;
        }
        try {
            await sendMoney(from || user_id, to, num);
        } catch (err) {
            showError(err.message);
        }
    };

    return (
        <div>
            <h2>Перевод средств</h2>

            <div>
                <button className="btn-neutral" onClick={() => {
                    setMode('deposit');
                    setSubMode(null);
                    resetFields();
                }}>
                    Пополнить счёт
                </button>
                <button className="btn-neutral" onClick={() => {
                    setMode('send');
                    setSubMode(null);
                    resetFields();
                }}>
                    Отправить деньги
                </button>
            </div>

            {mode === 'deposit' && (
                <div style={{ marginTop: '15px' }}>
                    <button className="btn-accept" onClick={() => {
                        setSubMode('sky');
                        resetFields();
                    }}>
                        С неба
                    </button>
                    <button className="btn-neutral" onClick={() => {
                        setSubMode('from-other');
                        resetFields();
                    }}>
                        С чужого счёта
                    </button>

                    {subMode === 'sky' && (
                        <div style={{ marginTop: '10px' }}>
                            <input
                                className="input-field"
                                placeholder="Сумма"
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                            />
                            <button className="btn-accept" onClick={handleSkyDeposit}>Пополнить</button>
                        </div>
                    )}

                    {subMode === 'from-other' && (
                        <div style={{ marginTop: '10px' }}>
                            <input
                                className="input-field"
                                placeholder="От кого"
                                value={from}
                                onChange={e => setFrom(e.target.value)}
                            />
                            <input
                                className="input-field"
                                placeholder="Кому (оставьте пустым, чтобы отправить себе)"
                                value={to}
                                onChange={e => setTo(e.target.value)}
                            />
                            <input
                                className="input-field"
                                placeholder="Сумма"
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                            />
                            <button className="btn-neutral" onClick={handleDepositFromOther}>Отправить</button>
                        </div>
                    )}
                </div>
            )}

            {mode === 'send' && (
                <div style={{ marginTop: '15px' }}>
                    <input
                        className="input-field"
                        placeholder="От кого (оставьте пустым, чтобы отправить от себя)"
                        value={from}
                        onChange={e => setFrom(e.target.value)}
                    />
                    <input
                        className="input-field"
                        placeholder="Кому"
                        value={to}
                        onChange={e => setTo(e.target.value)}
                    />
                    <input
                        className="input-field"
                        placeholder="Сумма"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                    <button className="btn-neutral" onClick={handleSend}>Отправить</button>
                </div>
            )}
            {alert && (
                <div style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    padding: '12px 20px',
                    borderRadius: '6px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                    zIndex: 1000,
                    fontWeight: 'bold',
                    fontSize: '14px',
                }}>
                    {alert}
                </div>
            )}
        </div>
    );
}
