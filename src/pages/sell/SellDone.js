import styles from './Sell.module.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SellDone() {

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate('/main');
    };
    
    return(

    <div className={styles.sellDone}>
        <div className={styles.checkmark}>
        <img src="/img/checkMark.png" alt="Checkmark" />
    </div>


        <p className={styles.sellDoneText1}>파일생성이 완료 되었습니다.</p>
        <p className={styles.sellDoneText2}>등록하신 상품이 진열되었습니다. 이용해주셔서 감사합니다.</p>
        <button type="button" className={styles.confirmButton} onClick={onClickHandler}>홈으로</button>
    </div>
    
    );
}

export default SellDone;