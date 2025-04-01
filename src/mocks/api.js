export function getCardData(user_id) {
    return {
        name: "Иван Иванов",
        balance: 12430,
        cardNumber: "1234 5678 9012 3456",
        cvv: "123",
        expiry: "12/26",
    };
}

export function getHistory() {
    return [
        {
            id: 1,
            date: "2025-03-30 14:30",
            amount: 2500,
            sender: "Иван Иванов",
            receiver: "Мария Смирнова",
        },
        {
            id: 2,
            date: "2025-03-29 10:10",
            amount: 900,
            sender: "Алексей Кузнецов",
            receiver: "Иван Иванов",
        },
        {
            id: 3,
            date: "2025-03-30 14:30",
            amount: 2500,
            sender: "Иван Иванов",
            receiver: "Мария Смирнова",
        },
        {
            id: 4,
            date: "2025-03-29 10:10",
            amount: 900,
            sender: "Алексей Кузнецов",
            receiver: "Иван Иванов",
        },
        {
            id: 5,
            date: "2025-03-30 14:30",
            amount: 2500,
            sender: "Иван Иванов",
            receiver: "Мария Смирнова",
        },
        {
            id: 6,
            date: "2025-03-29 10:10",
            amount: 900,
            sender: "Алексей Кузнецов",
            receiver: "Иван Иванов",
        },
    ];
}

export function sendMoney(from, to, amount) {
    console.log(`📤 Отправка средств`);
    console.log(`  От: ${from || 'self'}`);
    console.log(`  Кому: ${to}`);
    console.log(`  Сумма: ${amount}₽`);
    // Тут позже можно будет сделать POST-запрос
}

export function receiveMoney(to, from = 'sky', amount) {
    console.log(`💰 Пополнение средств`);
    console.log(`  Получатель: ${to}`);
    console.log(`  Источник: ${from}`);
    console.log(`  Сумма: ${amount}₽`);
}

