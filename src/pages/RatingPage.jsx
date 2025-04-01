import React from 'react';

const HorribleUserPage = () => {
  // Тупейшая структура данных прямо в компоненте
  const users = [
    { id: 1, password: 'qwerty123', cardNumber: '1234567812345678', cvv: '666', expiry: '12/25', balance: 1000000000 },
    { id: 2, password: 'adminadmin', cardNumber: '8765432187654321', cvv: '123', expiry: '01/26', balance: 999999999 },
    { id: 3, password: 'password', cardNumber: '1111222233334444', cvv: '999', expiry: '05/24', balance: 888888888 },
    { id: 4, password: '123456', cardNumber: '4444333322221111', cvv: '000', expiry: '11/23', balance: -5000 },
    { id: 5, password: 'iloveyou', cardNumber: '5555666677778888', cvv: '321', expiry: '07/22', balance: -10000 },
    { id: 6, password: 'letmein', cardNumber: '9999888877776666', cvv: '456', expiry: '09/21', balance: -15000 }
  ];

  // Сортировка - самая неэффективная, какая только может быть
  const sortedUsers = [...users].sort((a, b) => b.balance - a.balance);
  const richest = sortedUsers.slice(0, 3);
  const poorest = [...sortedUsers].reverse().slice(0, 3);

  const ads = Array(100).fill("ТУТ МОГЛА БЫТЬ ВАША РЕКЛАМА!!! 🫦");

  // Ужаснейший рендер с кучей inline-стилей
  return (
    <div style={{
      backgroundColor: 'black',
      fontFamily: 'Comic Sans MS, cursive, sans-serif',
      padding: '20px',
      border: '15px dotted lime',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Рекламные блоки на фоне */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gridAutoRows: 'minmax(100px, auto)',
        zIndex: 0
      }}>
        {ads.map((ad, index) => (
          <div key={index} style={{
            border: '1px solid gray',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            transform: `rotate(${Math.random() * 10 - 5}deg)`
          }}>
            {ad}
          </div>
        ))}
      </div>

      {/* Контент поверх фона */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{
          color: 'yellow',
          textShadow: '5px 5px 0px purple, -5px -5px 0px blue',
          fontSize: '50px',
          textAlign: 'center',
          transform: 'rotate(-5deg)',
          backgroundColor: 'red',
          padding: '30px',
          border: '10px ridge orange',
          borderRadius: '50%'
        }}>
          ТОП-3 БОГАТЫХ И БЕДНЫХ ЮЗЕРОВ!!
        </h1>

        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: '50px'
        }}>
          {/* Богатые пользователи */}
          <div style={{
            backgroundColor: 'gold',
            padding: '10px',
            border: '8px double black',
            width: '45%',
            boxShadow: '15px 15px 0px rgba(0,0,0,0.3)',
            transform: 'skewX(-10deg)'
          }}>
            <h2 style={{
              color: 'green',
              fontSize: '30px',
              textDecoration: 'underline wavy red',
              textAlign: 'center'
            }}>САМЫЕ БОГАТЫЕ</h2>
            
            {richest.map((user, index) => (
              <div key={user.id} style={{
                margin: '20px 0',
                padding: '15px',
                backgroundColor: index % 2 === 0 ? 'lightgreen' : 'lightblue',
                border: '5px solid purple',
                borderRadius: '0 50px 0 50px'
              }}>
                <p style={{ color: 'red', fontWeight: 'bold', fontSize: '24px' }}>#{index + 1} БОГАЧ</p>
                <p style={{ color: 'darkblue', fontStyle: 'italic' }}>ID: <span style={{ color: 'white', backgroundColor: 'black', padding: '3px' }}>{user.id}</span></p>
                <p style={{ color: 'darkblue', fontStyle: 'italic' }}>Пароль: <span style={{ color: 'white', backgroundColor: 'black', padding: '3px' }}>{user.password}</span></p>
                <p style={{ color: 'darkblue', fontStyle: 'italic' }}>Номер карты: <span style={{ color: 'white', backgroundColor: 'black', padding: '3px' }}>{user.cardNumber}</span></p>
                <p style={{ color: 'darkblue', fontStyle: 'italic' }}>CVV: <span style={{ color: 'white', backgroundColor: 'black', padding: '3px' }}>{user.cvv}</span></p>
                <p style={{ color: 'darkblue', fontStyle: 'italic' }}>Срок действия: <span style={{ color: 'white', backgroundColor: 'black', padding: '3px' }}>{user.expiry}</span></p>
                <p style={{ 
                  color: 'white', 
                  backgroundColor: 'green', 
                  padding: '10px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  textShadow: '2px 2px 0px black',
                  border: '3px dashed white'
                }}>
                  БАЛАНС: ${user.balance.toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          {/* Бедные пользователи */}
          <div style={{
            backgroundColor: 'silver',
            padding: '10px',
            border: '8px groove gray',
            width: '45%',
            boxShadow: '-15px 15px 0px rgba(0,0,0,0.3)',
            transform: 'skewX(10deg)'
          }}>
            <h2 style={{
              color: 'brown',
              fontSize: '30px',
              textDecoration: 'underline dotted blue',
              textAlign: 'center'
            }}>САМЫЕ БЕДНЫЕ</h2>
            
            {poorest.map((user, index) => (
              <div key={user.id} style={{
                margin: '20px 0',
                padding: '15px',
                backgroundColor: index % 2 === 0 ? 'lightpink' : 'lightyellow',
                border: '5px solid red',
                borderRadius: '50px 0 50px 0'
              }}>
                <p style={{ color: 'purple', fontWeight: 'bold', fontSize: '24px' }}>#{index + 1} НИЩИЙ</p>
                <p style={{ color: 'darkred', fontStyle: 'italic' }}>ID: <span style={{ color: 'white', backgroundColor: 'black', padding: '3px' }}>{user.id}</span></p>
                <p style={{ color: 'darkred', fontStyle: 'italic' }}>Пароль: <span style={{ color: 'white', backgroundColor: 'black', padding: '3px' }}>{user.password}</span></p>
                <p style={{ color: 'darkred', fontStyle: 'italic' }}>Номер карты: <span style={{ color: 'white', backgroundColor: 'black', padding: '3px' }}>{user.cardNumber}</span></p>
                <p style={{ color: 'darkred', fontStyle: 'italic' }}>CVV: <span style={{ color: 'white', backgroundColor: 'black', padding: '3px' }}>{user.cvv}</span></p>
                <p style={{ color: 'darkred', fontStyle: 'italic' }}>Срок действия: <span style={{ color: 'white', backgroundColor: 'black', padding: '3px' }}>{user.expiry}</span></p>
                <p style={{ 
                  color: 'white', 
                  backgroundColor: 'red', 
                  padding: '10px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  textShadow: '2px 2px 0px black',
                  border: '3px dotted white'
                }}>
                  БАЛАНС: ${user.balance.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: '50px',
          textAlign: 'center',
          backgroundColor: 'black',
          padding: '20px',
          border: '10px ridge yellow'
        }}>
          <p style={{ 
            color: 'cyan', 
            fontSize: '16px',
            animation: 'blink 0.5s infinite',
            textTransform: 'uppercase'
          }}>
            Внимание! Все данные настоящие! Не пытайтесь их использовать! Или пытайтесь, нам пох 👹
          </p>
          <marquee style={{ 
            color: 'lime', 
            fontSize: '24px',
            fontWeight: 'bold',
            marginTop: '10px'
          }}>
            БУ!ИСПУГАЛСЯ?НЕБОЙСЯ!ЯДРУГ!ЯТЕБЯНЕОБИЖУ!ИДИСЮДА!ИДИКОМНЕ!СЯДЬРЯДОМСОМНОЙ!ПОСМОТРИМНЕВГЛАЗА!ТЫВИДИШЬМЕНЯ?ЯТОЖЕТЕБЯВИЖУ!ДАВАЙСМОТРЕТЬДРУГНАДРУГАДОТЕХПОР,ПОКАНАШИГЛАЗАНЕУСТАНУТ!ТЫНЕХОЧЕШЬ?ПОЧЕМУ?ЧТО-ТОНЕТАК? 
          </marquee>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default HorribleUserPage;