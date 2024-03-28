import styles from "./RegisterJoin.module.css";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { getMemberList } from '../apis/memberAPI';
// import { onChange } from "react";
import { useNavigate } from "react-router-dom";




export default function RegisterJoin() {

  const navigate = useNavigate();

  // const [id, setId] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirm, setConfirm] = useState('');
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [memberList, setMemberList] = useState([]);
  // const [activeNumber, setActiveNumber] = useState()
  // const [random, setRandom] = useState();
  // const [user, setUser] = useState();


    return (
      <>

        <div className={styles.RJdiv}>

          <div className={styles.mbShip}>회원가입</div>
          <ol className={styles.inline}>
            <li>약관동의</li>
            <img src="img/Vector2.png" alt="" />
            <li>정보입력</li>
            <img src="img/Vector3.png" alt="" />
            <li>가입완료</li>
          </ol>

          <div className={styles.box}>

            <input
              type="text"
              placeholder="아이디 Id * 예시)humming1234"
              maxLength={20}>
            </input>

            <input
              type='password'
              placeholder='비밀번호'
              maxLength={16}>
            </input>


            <input
              type="password"
              placeholder='비밀번호 확인'
              maxLength={16}>
            </input>

            <input
              type="text"
              placeholder='이름 Name*예시)허밍커넥트'
              theme='underLine'
              maxLength={16}>
            </input>

            <input
              type="text"
              placeholder='이메일 Email*예시)humming@gmail.com'
              maxLength={25}>
            </input>
            <input
              type="text"
              placeholder='전화번호'
              maxLength={13}>
            </input>

            <div className={styles.inBoxAll}>
              <div className={styles.inputBox}>
                <div className={styles.inputInnerBox}>
                  <input
                    type="text"

                  ></input>
                  <span>3:00</span>
                </div>

                <button 
                  className={styles.button}>인증</button>
              </div>






              <button className={styles.comple}>회원가입</button>
            </div>
            <div>

            </div>
          </div>
        </div>

      </>

    );
  }
