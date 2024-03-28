
import { useLocation } from 'react-router-dom';
import styles from './Order.module.css';
import React, { useState, useEffect } from 'react';

function Payment() {
    const location = useLocation();
    const orderDetails = location.state; // Order 페이지에서 전달한 상태(state)

    const [productMoney, setProductMoney] = useState(6500000); // 예시 값
    const [deliveryPrice, setDeliveryPrice] = useState(50000); // 예시 값

    const [totalPayment, setTotalPayment] = useState(0);
    
    useEffect(() => {
        const total = productMoney + deliveryPrice;
        setTotalPayment(total);
    }, [productMoney, deliveryPrice]);

    return (
        <div>
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
        </div>
</div>
    );
}

export default Payment;