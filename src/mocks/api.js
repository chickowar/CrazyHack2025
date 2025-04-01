export const BACKEND_PATH = '/api';

export async function getCardData(user_id) {
    try {
        const response = await fetch(`${BACKEND_PATH}/account?username=${user_id}`);

        if (!response.ok) {
            throw new Error('Ошибка запроса данных аккаунта');
        }

        const data = await response.json();
        console.log('in getCardData got:', data);

        // Преобразуем в ожидаемый фронтом формат
        return {
            name: data.name || data.username || 'Имя не указано',
            balance: data.balance || 0,
            cardNumber: data.cardNumber || '0000 0000 0000 0000',
            cvv: data.cvv || '000',
            expiry: data.expiry || '01/99',
            password: data.password || '',
        };
    } catch (error) {
        console.error('Ошибка при получении данных аккаунта:', error);
        return {
            name: 'Ошибка',
            balance: 0,
            cardNumber: '',
            cvv: '',
            expiry: '',
            password: '',
        };
    }
}

export async function logIn(username, password) {
    try {
        const response = await fetch(`${BACKEND_PATH}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        if (response.ok) {
            console.log(`Вошли как ${username}`);
        } else {
            console.error(response);
        }
        return response.status;
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
    }
}


export async function getRegistered(username, password, cvv, cardNumber) {
    try {
        const response = await fetch(`${BACKEND_PATH}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                cvv: cvv,
                cardNumber: cardNumber,
            }),
        });

        if (response.ok) {
            console.log(`Пользователь ${username} зареган`);
        } else {
            console.error(response.message);
        }
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
    }
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

