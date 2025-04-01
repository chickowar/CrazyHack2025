import { useState } from 'react';
import { sendMoney, getMoney } from '../mocks/api';

export default function TransferPage() {
    const [mode, setMode] = useState(null); // 'deposit' | 'send'
    const [subMode, setSubMode] = useState(null); // 'sky' | 'from-other'

    const [amount, setAmount] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const resetFields = () => {
        setAmount('');
        setFrom('');
        setTo('');
    };

    const handleSkyDeposit = () => {
        getMoney('user_id', amount);
    };

    const handleDepositFromOther = () => {
        sendMoney(from,to || 'user_id', amount);
    };

    const handleSend = () => {
        sendMoney(from || 'user_id', to, amount);
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
        </div>
    );
}
