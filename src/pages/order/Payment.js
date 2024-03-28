
import { useLocation } from 'react-router-dom';
import styles from './Order.module.css';
import React, { useState, useEffect } from 'react';

function Payment() {
    const location = useLocation();
    const orderDetails = location.state;
    
    const [productMoney, setProductMoney] = useState(6500000); // 예시 값
    const [deliveryPrice, setDeliveryPrice] = useState(50000); // 예시 값
    
        const [totalPayment, setTotalPayment] = useState(0);

        useEffect(() => {
            const total = productMoney + deliveryPrice;
            setTotalPayment(total);
        }, [productMoney, deliveryPrice]);
    
        const [selectedOption, setSelectedOption] = useState('');
        const [isOrderActive, setIsOrderActive] = useState(false);
        const [paymentImage, setPaymentImage] = useState('');

        const handleSelectOption = (option) => {
            setSelectedOption(option);
            setIsOrderActive(true); // 결제 수단을 선택하면 주문하기 버튼을 활성화
    };

    const handleOrderClick = () => {
        if (!isOrderActive) return; // 주문하기 버튼이 비활성화 상태면 아무 동작도 하지 않음


        const imageUrl = selectedOption === 'card' 
            ? '/img/신용카드.png' // 신용/체크카드 결제 이미지 경로
            : '/img/계좌이체.png'; // 실시간 계좌이체 이미지 경로

            setPaymentImage(imageUrl);
    };

    return (
<div className={styles.orderPage}>
        <div className={styles.order}>주문</div>
        <div className={styles.productAll}>
        <div className={styles.product}>
            <img
            src="/img/Smallimg.png"
            style={{height: '120px'}}
            />
            </div>
            <div className={styles.productInfo}>
                <div className={styles.productName}>Molly Greene</div>
                <div className={styles.productSince}>Splinter, 2024</div>
                <div className={styles.productPrice}>￦6,500,000</div>
            </div>
        </div>
        <div className={styles.line}>
    </div>
            
            <div className={styles.orderInfo}>배송지</div>
            <div className={styles.buyerName}>
                <p>{orderDetails.recipient}</p>
                </div>
                <div className={styles.buyerInfo}>
                <p>{`${orderDetails.addressNumber} ${orderDetails.address}`}</p>
                <p>{orderDetails.phoneNumber}</p>
                <p>{orderDetails.email}</p>
                <p>배송 메시지 : {orderDetails.orderBy}</p>
                </div>
                <div className={styles.line}></div>

                <div className={styles.orderInfo}>결제 정보</div>

                
                <div className={styles.orderPayment}>주문 금액
                <div className={styles.orderPayment2}>₩{totalPayment.toLocaleString()}</div>
            </div>
            <div className={styles.productMoney}>상품 금액
                <div className={styles.productMoney2}>₩{productMoney.toLocaleString()}</div>
            </div>
            <div className={styles.delPrice}>배송비
                <div className={styles.delPrice2}>₩{deliveryPrice.toLocaleString()}</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.orderPayment3}>총 결제금액
                <div className={styles.orderPayment4}>₩{totalPayment.toLocaleString()}</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.orderPayment3}>결제 수단
        </div>

        <div className={styles.container}>
            <div className={styles.paymentOptions}>
                <button 
                    className={`${styles.button} ${selectedOption === 'card' ? styles.selected : ''}`}
                    onClick={() => handleSelectOption('card')}>
                    신용/체크카드 결제
                </button>
                <button 
                    className={`${styles.button} ${selectedOption === 'transfer' ? styles.selected : ''}`}
                    onClick={() => handleSelectOption('transfer')}>
                    실시간 계좌이체
                </button>
            </div>
            <button 
                className={`${styles.orderButton} ${isOrderActive ? '' : styles.inactive}`}
                onClick={handleOrderClick}>
                주문하기
            </button>
            {paymentImage && (
                <div className={styles.paymentImageContainer}>
                    <img src={paymentImage} alt="결제 이미지" />
                </div>
            )}

        </div>
        </div>
    );
}

export default Payment;