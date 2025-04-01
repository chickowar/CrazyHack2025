import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import { gsap } from 'gsap';

const USERS = [
  {id: '1', pwd: '123', card: '1111222233334444', cvv: '123', exp: '12/24', balance: 1000},
  {id: '2', pwd: 'qwe', card: '5555666677778888', cvv: '456', exp: '01/25', balance: 2000},
];

function RegistrationP() {
  const [mode, setMode] = useState('login');
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = $(buttonRef.current).find('.button--bubble');
    
    button.each(function() {
      const $circlesTopLeft = $(this).parent().find('.circle.top-left');
      const $circlesBottomRight = $(this).parent().find('.circle.bottom-right');

      const tl = gsap.timeline();
      const tl2 = gsap.timeline();
      const btTl = gsap.timeline({ paused: true });

      tl.to($circlesTopLeft, {
        duration: 1.2,
        x: -25,
        y: -25,
        scaleY: 2,
        ease: "slow(0.1, 0.7, false)"
      });

      tl.to($circlesTopLeft.eq(0), {
        duration: 0.1,
        scale: 0.2,
        x: "+=6",
        y: "-=2"
      });

      tl.to($circlesTopLeft.eq(1), {
        duration: 0.1,
        scaleX: 1,
        scaleY: 0.8,
        x: "-=10",
        y: "-=7"
      }, "-=0.1");

      tl.to($circlesTopLeft.eq(2), {
        duration: 0.1,
        scale: 0.2,
        x: "-=15",
        y: "+=6"
      }, "-=0.1");

      tl.to($circlesTopLeft, {
        duration: 1,
        scale: 0,
        x: "-=5",
        y: "-=15",
        opacity: 0,
        stagger: 0
      });

      const tlBt1 = gsap.timeline();
      const tlBt2 = gsap.timeline();
      
      tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
      tlBt1.add(tl);

      tl2.set($circlesBottomRight, { x: 0, y: 0 });
      tl2.to($circlesBottomRight, {
        duration: 1.1,
        x: 30,
        y: 30,
        ease: "slow(0.1, 0.7, false)"
      });

      tl2.to($circlesBottomRight.eq(0), {
        duration: 0.1,
        scale: 0.2,
        x: "-=6",
        y: "+=3"
      });

      tl2.to($circlesBottomRight.eq(1), {
        duration: 0.1,
        scale: 0.8,
        x: "+=7",
        y: "+=3"
      }, "-=0.1");

      tl2.to($circlesBottomRight.eq(2), {
        duration: 0.1,
        scale: 0.2,
        x: "+=15",
        y: "-=6"
      }, "-=0.2");

      tl2.to($circlesBottomRight, {
        duration: 1,
        scale: 0,
        x: "+=5",
        y: "+=15",
        opacity: 0,
        stagger: 0
      });
      
      tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 });
      tlBt2.add(tl2);

      btTl.add(tlBt1);
      btTl.to($(this).parent().find('.button.effect-button'), {
        duration: 0.8,
        scaleY: 1.1
      }, 0.1);
      btTl.add(tlBt2, 0.2);
      btTl.to($(this).parent().find('.button.effect-button'), {
        duration: 1.8,
        scale: 1,
        ease: "elastic.out(1.2, 0.4)"
      }, 1.2);

      btTl.timeScale(2.6);

      $(this).on('mouseover', function() {
        btTl.restart();
      });
    });
  }, [mode]);

  const doStuff = (e) => {
    e.preventDefault();
    let x = false;

    if(mode === 'login') {
      USERS.forEach((u) => {
        if(u.pwd === formData.pwd) {
          if(u.id === formData.id) {
            x = true;
            alert('Welcome user ' + u.id + '! Your balance is: ' + u.balance);
          } else {
            setError('У User ' + u.id + ' этот пароль! Вы сдурели?!');
          }
        }
      });
      if(!x) {
        setError('Наталья, походу мы обосрались!!!! Проверь данные, идиот');
      }
    } else {
      if(formData.pwd && formData.card && formData.cvv) {
        USERS.push({
          id: String(USERS.length + 1),
          pwd: formData.pwd,
          card: formData.card,
          cvv: formData.cvv,
          exp: formData.exp || '01/99',
          balance: Math.floor(Math.random() * 1000)
        });
        alert('OK! ID: ' + USERS[USERS.length-1].id);
      } else {
        setError('Пошел НАХУЙ по-братски!!! ПОЛЯ ПУСТЫЕ КАК И ТВОЯ ГАЛАВА');
      }
    }
  };

  return (
    <div style={{background: '#ff00ff', minHeight: '100vh', padding: '10px'}} ref={buttonRef}>
      <div className="bubble-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
              <feComposite in="SourceGraphic" in2="goo"/>
            </filter>
          </defs>
        </svg>

        <span className="button--bubble__container">
          <a href="#" className="button button--bubble" onClick={(e) => {
            e.preventDefault();
            setMode(mode === 'login' ? 'register' : 'login');
          }}>
            {mode === 'login' ? 'SWITCH TO REGISTER!!!' : 'GO BACK TO LOGIN!!!'}
          </a>
          <span className="button--bubble__effect-container">
            <span className="circle top-left"></span>
            <span className="circle top-left"></span>
            <span className="circle top-left"></span>
            <span className="button effect-button"></span>
            <span className="circle bottom-right"></span>
            <span className="circle bottom-right"></span>
            <span className="circle bottom-right"></span>
          </span>
        </span>
      </div>

      <form onSubmit={doStuff} style={{marginTop: '50px', background: '#00ff00', padding: '30px'}}>
        <h1 style={{color: 'red', textTransform: 'uppercase', textDecoration: 'underline'}}>
          {mode === 'login' ? 'LOGIN NOW!!!' : 'REGISTER NOW!!!'}
        </h1>
        
        {mode === 'login' && (
          <input 
            type="text"
            placeholder="YOUR ID HERE!!!"
            onChange={(e) => setFormData({...formData, id: e.target.value})}
            style={{fontSize: '20px', margin: '10px', border: '3px dashed blue'}}
          />
        )}
        
        <input 
          type="password"
          placeholder="SUPER SECRET PASSWORD!!!"
          onChange={(e) => setFormData({...formData, pwd: e.target.value})}
          style={{fontSize: '20px', margin: '10px', border: '3px dashed blue'}}
        />
        
        {mode === 'register' && (
          <>
            <input 
              type="text"
              placeholder="CARD NUMBER!!!"
              onChange={(e) => setFormData({...formData, card: e.target.value})}
              style={{fontSize: '20px', margin: '10px', border: '3px dashed blue'}}
            />
            <input 
              type="text"
              placeholder="CVV CODE!!!"
              onChange={(e) => setFormData({...formData, cvv: e.target.value})}
              style={{fontSize: '20px', margin: '10px', border: '3px dashed blue'}}
            />
            <input 
              type="text"
              placeholder="EXPIRY DATE!!!"
              onChange={(e) => setFormData({...formData, exp: e.target.value})}
              style={{fontSize: '20px', margin: '10px', border: '3px dashed blue'}}
            />
          </>
        )}
        
        <div className="bubble-wrapper">
          <span className="button--bubble__container">
            <button type="submit" className="button button--bubble">
              {mode === 'login' ? 'LOGIN!!!' : 'REGISTER!!!'}
            </button>
            <span className="button--bubble__effect-container">
              <span className="circle top-left"></span>
              <span className="circle top-left"></span>
              <span className="circle top-left"></span>
              <span className="button effect-button"></span>
              <span className="circle bottom-right"></span>
              <span className="circle bottom-right"></span>
              <span className="circle bottom-right"></span>
            </span>
          </span>
        </div>
      </form>

      {error && (
        <div style={{
          background: 'red',
          color: 'white',
          padding: '20px',
          marginTop: '20px',
          fontSize: '24px',
          textAlign: 'center',
          animation: 'blink 0.5s infinite'
        }}>
          {error}
        </div>
      )}

      <style>
        {`
          * {
            box-sizing: border-box;
          }

          .bubble-wrapper {
            display: block;
            height: 100%;
          }

          .button {
            -webkit-font-smoothing: antialiased;
            background-color: #8B4513 !important;
            border: none;
            color: #fff;
            display: inline-block;
            font-family: 'Montserrat', sans-serif;
            font-size: 14px;
            font-weight: 100;
            text-decoration: none;
            user-select: none;
            letter-spacing: 1px;
            color: white;
            padding: 20px 40px;
            text-transform: uppercase;
          }

          .button:hover {
            background-color: #8B4513 !important;
            color: #fff;
          }
          
          .button:active {
            transform: scale(0.95);
          }

          .button--bubble {
            position: relative;
            z-index: 2;
            color: white;
            background: #8B4513 !important;
          }

          .button--bubble:hover {
            background: #8B4513 !important;
          }

          .button--bubble:hover + .button--bubble__effect-container .circle {
            background: #8B4513 !important;
          }

          .button--bubble:hover + .button--bubble__effect-container .button {
            background:  #8B4513 !important;
          }

          .button--bubble:active + .button--bubble__effect-container {
            transform: scale(0.95);
          }

          .button--bubble__container {
            position: relative;
            display: inline-block;
          }

          .button--bubble__container .effect-button {
            position: absolute;
            width: 50%;
            height: 25%;
            top: 50%;
            left: 25%;
            z-index: 1;
            transform: translateY(-50%);
            background:  #8B4513 !important;
          }

          .button--bubble__effect-container {
            position: absolute;
            display: block;
            width: 200%;
            height: 400%;
            top: -150%;
            left: -50%;
            -webkit-filter: url("#goo");
            filter: url("#goo");
            pointer-events: none;
          }

          .button--bubble__effect-container .circle {
            position: absolute;
            width: 25px;
            height: 25px;
            border-radius: 15px;
            background: #8B4513 !important;
          }

          .button--bubble__effect-container .circle.top-left {
            top: 40%;
            left: 27%;
          }

          .button--bubble__effect-container .circle.bottom-right {
            bottom: 40%;
            right: 27%;
          }

          .goo {
            position: absolute;
            visibility: hidden;
            width: 1px;
            height: 1px;
          }

          .button--bubble__container {
            top: 50%;
            margin-top: -25px;
          }

          @keyframes hue-rotate {
            from {
              -webkit-filter: hue-rotate(0);
              -moz-filter: hue-rotate(0);
              -ms-filter: hue-rotate(0);
              filter: hue-rotate(0);
            }
            to {
              -webkit-filter: hue-rotate(360deg);
              -moz-filter: hue-rotate(360deg);
              -ms-filter: hue-rotate(360deg);
              filter: hue-rotate(360deg);
            }
          }

          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default RegistrationP;