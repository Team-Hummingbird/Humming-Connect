import { useNavigate } from 'react-router-dom';
import styles from './Order.module.css';
import React, { useEffect, useState } from 'react';


    function Order() {

    const navigate = useNavigate();

    const onClickHandler = () => {
        if (isFormFilled) {
        navigate('/payment');
    };
}
    const [isInfoAutoFilled, setIsInfoAutoFilled] = useState(false);
    const [recipient, setRecipient] = useState('');
    const [anoAdress, setAnoAdress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [orderBy, setOrderBy] = useState('');

    const onChangeHandler = () => {
        setIsInfoAutoFilled(!isInfoAutoFilled);
    };

    useEffect(() => {
        if (isInfoAutoFilled) {
            setRecipient('김허밍');
            setPhoneNumber('010-1234-5678');
            setEmail('hummingConnect@hummingConnect.com');
        } else {
            setRecipient('');
            setPhoneNumber('');
            setEmail('');
        }
    }, [isInfoAutoFilled]);

    const isFormFilled = recipient && phoneNumber && email && anoAdress;


    return (
    <>
<div className={styles.orderPage}>
        <div className={styles.order}>주문
            <div className={styles.orderDetail}>
                <div className={styles.line}>
            </div>
        </div>
    </div>
        <div className={styles.orderInfo}>배송 정보</div>
        <div className={styles.infoContainer}>
        <div className={styles.orderInfoText}>배송지 정보 입력</div>
        <input
                type="checkbox"
                checked={isInfoAutoFilled}
                onChange={onChangeHandler}
                className={styles.infoCheckbox}
            />
            <div className={styles.myInfoCheck}>내 정보 입력</div>
            </div>

    <div className={styles.orderInfoText1}>배송지 정보를 입력해주세요.</div>
    <div className={styles.orderInfoText2}>오배송 및 지연배송 방지를 위해 정확한 정보를 입력하시고 한번 더 확인해주세요.</div>
    <div className={styles.orderInfoText3}>
        <span className={styles.redStar}>* </span>필수입력항목
    </div>

    <div className={styles.recipientName}>
        <div className={styles.recipientBlockInner}>
            <div className={styles.recipientNameBlock}>
                <input type="text" value={recipient} onChange={(e) => 
                    setRecipient(e.target.value)} 
                className={styles.inputField} 
                placeholder='받는 사람 이름 *'/>
            </div>
        </div>
    </div>


</div>
    </>
    
    );

}

export default Order;