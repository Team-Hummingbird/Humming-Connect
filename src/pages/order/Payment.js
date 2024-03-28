
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Order.module.css';

function Payment() {
    const location = useLocation();
    const orderDetails = location.state; // Order 페이지에서 전달한 상태(state)

    return (
        <div className={styles.orderPage}>
            <div className={styles.order}>주문
                <div className={styles.product}>
                    <img 
                        src="/img/Smallimg.png" 
                        alt="상품 이미지" 
                        style={{height: '120px'}} 
                    />
                </div>
                <div className={styles.line}></div>
            </div>
            
            <div className={styles.orderInfo}>배송지</div>
            <div className={styles.shippingInfo}>
                <p>{orderDetails.recipient}</p>
                <p>{`${orderDetails.addressNumber} ${orderDetails.address}`}</p>
                <p>{orderDetails.phoneNumber}</p>
                <p>{orderDetails.email}</p>
                <p>{orderDetails.orderBy}</p>
            </div>
        </div>
    );
}

export default Payment;
