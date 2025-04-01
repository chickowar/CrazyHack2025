export const BACKEND_PATH = '/api';

export function getCardData(user_id) {
    return {
        name: "Иван Иванов",
        balance: 12430,
        cardNumber: "1234 5678 9012 3456",
        cvv: "123",
        expiry: "12/26",
    };
}

export async function cancelHistory(transaction_id) {
}

export async function getHistory(user_id) {
    try {
        const response = await fetch(`${BACKEND_PATH}/history?username=${user_id}`);
        const data = await response.json();

        if (!data.transactions) return [];

        return data.transactions.map(tx => ({
            id: tx.id,
            date: new Date(tx.date).toLocaleString('ru-RU'), // формат как раньше
            amount: tx.amount,
            sender: tx.fromUserName,
            receiver: tx.toUserName,
            status: tx.status,
        }));
    } catch (error) {
        console.error('Ошибка при получении истории:', error);
        return []; // fallback в случае ошибки
    }
}

export function sendMoney(from, to, amount) {
    console.log(`  Отправка средств`);
    console.log(`  От: ${from || 'self'}`);
    console.log(`  Кому: ${to}`);
    console.log(`  Сумма: ${amount}₽`);
    // Тут позже можно будет сделать POST-запрос
}

export function receiveMoney(to, from = 'sky', amount) {
    console.log(` Пополнение средств`);
    console.log(`  Получатель: ${to}`);
    console.log(`  Источник: ${from}`);
    console.log(`  Сумма: ${amount}₽`);
}

