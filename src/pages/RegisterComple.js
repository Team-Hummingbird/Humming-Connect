import styles from "./RegisterComple.module.css";
import { useNavigate } from "react-router-dom";

export default function RegisterComple () {




    return (
        <div>
        <div className={styles.comple}>
        <img className={styles.imgT}
        src="img/comple0.png"></img>

        <p className={styles.text0}><strong>회원가입</strong>이 <strong>완료</strong> 되었습니다.</p>

            <p className={styles.text1}>로그인하시고 <strong>Humming Connect</strong>에 바로 커넥트하세요.</p>
            <p className={styles.p1}>더욱 다양한 서비스와 혜택을 제공 받으실 수 있습니다.</p>
        
        <div >
        <button className={styles.button1}>홈으로</button>
        <button className={styles.button2}>로그인</button>
        </div>
        </div>
    </div>



    );
}