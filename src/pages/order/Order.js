import { useNavigate } from 'react-router-dom';
import styles from './Order.module.css';
import React, { useEffect, useState } from 'react';
import userProfile from '../../data/Profile.json';

    function Order() {

    const navigate = useNavigate();

    const onClickHandler = () => {
        if (isFormFilled) {
        navigate('/payment', {
            state: {
                recipient,
                addressNumber,
                address,
                phoneNumber,
                email,
                orderBy
            }
        });
    }
}
    const onCheckboxChange = (e) => {
        setIsInfoAutoFilled(e.target.checked);
};



    const [isInfoAutoFilled, setIsInfoAutoFilled] = useState(false);
    const [recipient, setRecipient] = useState('');
    const [showAddressSearch, setShowAddressSearch] = useState(false);
    const [addressNumber, setAddressNumber] = useState('');
    const [address, setAddress] = useState('');
    const [anoAddress, setAnoAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [orderBy, setOrderBy] = useState('');

    const handleAddressSearch = () => {
        setShowAddressSearch(true);
    };

    const onAddressImageClick = () => {
        setAddressNumber('userProfile.address'); 
        setAddress('userProfile.address'); 
        setShowAddressSearch(false); 
    };
    useEffect(() => {
        setAddressNumber('userProfile.address.zipCode'); 
        setAddress('userProfile.address.basicAddress'); 
        if (isInfoAutoFilled) {
            setRecipient('userProfile.name');     
            setPhoneNumber('userProfile.phoneNumber');        
            setEmail('userProfile.email');
        } else {
            setRecipient('');
            setPhoneNumber('');
            setEmail('');
        }
    }, [isInfoAutoFilled]);


    useEffect(() => {
        if (isInfoAutoFilled) {
            setRecipient('userProfile.name');     //userProfile.name
            setPhoneNumber('userProfile.phoneNumber');        //userProfile.phoneNumber
            setEmail('userProfile.email');        //userProfile.email
            setAddressNumber('userProfile.address');
            setAddress('userProfile.address');
        } else {
            setRecipient('');
            setPhoneNumber('');
            setEmail('');
            setAddressNumber('');
            setAddress('');
        }
    }, [isInfoAutoFilled, userProfile]);

    useEffect(() => {
        if (showAddressSearch) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [showAddressSearch]);


    const isFormFilled = recipient && addressNumber && address && phoneNumber && email;


    return (
    <>
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
        <div className={styles.orderInfo}>배송 정보</div>
        <div className={styles.infoContainer}>
        <div className={styles.orderInfoText}>배송지 정보 입력</div>
        <input
                type="checkbox"
                checked={isInfoAutoFilled}
                onChange={onCheckboxChange}
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
                <input type="text" 
                value={recipient} 
                onChange={(e) => setRecipient(e.target.value)} 
                className={`${styles.inputField} ${isInfoAutoFilled ? styles.disabledInput : ''}`}
                placeholder='받는 사람 이름 *'
                disabled={isInfoAutoFilled} />
            </div>
        </div>
    </div>

    <div className={styles.adNumber}>
        <div className={styles.adNumberBlockInner}>
            <div className={styles.adNumberBlock}>
                <input type="text" 
                value={addressNumber} 
                className={`${styles.inputField} ${styles.disabledInput}`}
                placeholder='우편번호 *'
                disabled />
                <button type="button" 
                onClick={handleAddressSearch}
                className={styles.searchButton}>
                주소 검색
            </button>
            {showAddressSearch && (
                <div className={styles.addressSearchImage}>
                <img 
                    src="/img/우편번호검색.png" 
                    alt="주소 검색"
                    onClick={onAddressImageClick} 
                />
                </div>
            )}
            </div>
        </div>
    </div>

    <div className={styles.adress}>
        <div className={styles.adresstBlockInner}>
            <div className={styles.adressBlock}>
                <input type="text" 
                value={address} 
                className={`${styles.inputField} ${styles.disabledInput}`} 
                placeholder='기본 주소 *'
                disabled />
            </div>
        </div>
    </div>

    <div className={styles.anoAdress}>
        <div className={styles.anoAdressBlockInner}>
            <div className={styles.anoAdressBlock}>
                <input type="text" 
                value={anoAddress} 
                onChange={(e) => setAnoAddress(e.target.value)} 
                className={styles.inputField} 
                placeholder='나머지 주소(선택 입력 가능)'/>
            </div>
        </div>
    </div>

    <div className={styles.phoneNumber}>
        <div className={styles.phoneNumberBlockInner}>
            <div className={styles.phoneNumberBlock}>
                <input type="text" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                className={`${styles.inputField} ${isInfoAutoFilled ? styles.disabledInput : ''}`}
                placeholder='휴대전화번호 *'
                disabled={isInfoAutoFilled}/>
            </div>
        </div>
    </div>

    <div className={styles.email}>
        <div className={styles.emailBlockInner}>
            <div className={styles.emailBlock}>
                <input type="text" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className={`${styles.inputField} ${isInfoAutoFilled ? styles.disabledInput : ''}`}
                placeholder='이메일 주소 *'
                disabled={isInfoAutoFilled}/>
            </div>
        </div>
    </div>

    <div className={styles.orderBy}>
        <div className={styles.orderByBlockInner}>
            <div className={styles.orderByBlock}>
                <input type="text" 
                value={orderBy} 
                onChange={(e) => setOrderBy(e.target.value)} 
                className={styles.inputField} 
                placeholder='배송관련 메시지 입력(선택 사항)'/>
            </div>
        </div>
    
    <button
        className={`${styles.nextPage} ${isFormFilled ? styles.nextPageActive : ''}`}
            onClick={onClickHandler }
            disabled={!isFormFilled}>다음
            </button>

            </div>
        </div>

    </>
    
    );

}

export default Order;