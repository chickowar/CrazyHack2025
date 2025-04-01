import { useNavigate } from 'react-router-dom';
import { useRef, useLayoutEffect, useState } from 'react';
import { getCardData } from '../mocks/api';

export default function AccountPage() {

    const imageRef = useRef(null);
    const [imageWidth, setImageWidth] = useState(0);

    useLayoutEffect(() => {
        if (imageRef.current) {
            setImageWidth(imageRef.current.offsetWidth);
        }

        const handleResize = () => {
            if (imageRef.current) {
                setImageWidth(imageRef.current.offsetWidth);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const navigate = useNavigate();
    const card = getCardData(1);


    return (
            <div className="image-wrapper">
                <div className="image-container">
                    <div className="image-holder" ref={imageRef}>
                        <img src="/images/печенька.jpg" alt="Demo" className="image"/>
                        <div
                            className="overlay-text"
                            style={{
                                left: `50%`,
                                top: `34.3%`,
                                fontSize: `${imageWidth * 0.032}px`,
                                transform: `rotate(${-3.9}deg)`,
                            }}
                        >
                            {card.cardNumber}
                        </div>

                        <div
                            className="overlay-text"
                            style={{
                                left: `5%`,
                                bottom: `10%`,
                                fontSize: `${imageWidth * 0.04}px`,
                                transform: `rotate(${-50}deg)`,
                            }}
                        >
                            {card.balance} ₽
                        </div>

                        <div
                            className="overlay-text"
                            style={{
                                left: `64%`,
                                top: `41%`,
                                fontSize: `${imageWidth * 0.023}px`,
                                transform: `rotate(${-3.9}deg)`,
                            }}
                        >
                            {card.expiry}
                        </div>

                        <div
                            className="overlay-text"
                            style={{
                                left: `70%`,
                                top: `28%`,
                                fontSize: `${imageWidth * 0.023}px`,
                                transform: `rotate(${-3.9}deg)`,
                            }}
                        >
                            {`CVV: ${card.cvv}`}
                        </div>

                        <div
                            className="overlay-text"
                            style={{
                                right: `14%`,
                                top: `46%`,
                                fontSize: `${imageWidth * 0.02}px`,
                                transform: `rotate(${-3.9}deg)`,
                            }}
                        >
                            <strong>{card.name}</strong>
                        </div>

                    </div>
                </div>
            </div>
    );
}
