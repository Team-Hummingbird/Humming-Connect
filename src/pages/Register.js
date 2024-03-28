import { isClickableInput } from "@testing-library/user-event/dist/utils";
import styles from "./Register.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Register({}) {

const navigate = useNavigate();

const onClickHandler = () => {
  if (checkbox1 &&  checkbox3 ) {
    navigate("./registerjoin");
  }
};

const [checkbox1, setCheckbox1] = useState(false);
// const [checkbox2, setCheckbox2] = useState(false);
const [checkbox3, setCheckbox3] = useState(false);
// const [checkbox4, setCheckbox4] = useState(false);



return (

  <div className={styles.div}>

    <div className={styles.mbShip}>회원가입</div>
    <ol className={styles.inline}>
      <li>약관동의</li>
      <img src="img/Vector2.png" alt="" />
      <li>정보입력</li>
      <img src="img/Vector3.png" alt="" />
      <li>가입완료</li>
    </ol>

    <div className={styles.box3}>
      <div className={styles.box}>
        <p className={styles.top}>제 1장 총칙</p>
        <p className={styles.write}>제 1조 (목적)</p>
        <p className={styles.write}>본 약관은 HummingConnect (이하 "누리집")이
          제공하는 모든 서비스(이하"서비스")의 이용조건 및 절차,
          이용자와 누리집의 권리, 의무, 책임사항과
          기타 제반 사항을 규정함을 목적으로 합니다. </p>
        <li className={styles.li}>
          누리집은 이 약관의 내용과 주소지, 관리자의 성명, 개인정보보호 담당자의 성명, 연락처(전화, 팩스, 전자우편 주소 등) 등을이용자가 알 수 있도록 누리집의 초기 서비스화면(전면)에 게시합니다.</li>
        <li className={styles.li}>
          누리집은 이 약관의 내용과 주소지, 관리자의 성명,개인정보보호 담당자의 성명,연락처(전화, 팩스, 전자우편 주소 등) 등을이용자가 알 수 있도록 누리집의 초기 서비스화면(전면)에 게시합니다.</li>
        <li className={styles.li}>
          누리집이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 누리집의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일 까지 공지합니다.</li>
          <div className={styles.checkboxs1}>
            <label htmlFor="checkbox1" className={styles.label}>
              <input
                className={`${styles.checkbox} ${
                  checkbox1 ? styles.RegisterActive : ""
                }`}
                type="checkbox"
                id="checkbox1"
                onClick={() => setCheckbox1(!checkbox1)}
              />
              (필수)동의
            </label>
            <label htmlFor="checkbox2" className={styles.checkbox}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id="checkbox2"
               
              />
              비동의
            </label>
        </div>
      </div>

      <div className={styles.box2}>
        <li className={styles.topli}>수집하는 개인정보 항목<br />HummingConnect 대표 누리집의 이용자 참여와 이용통계 분석 등의 서비스를 위해 회원 가입시 아래의 개인정보를 수집하고 있습니다.
          <li className={styles.disclist}>
            가. 필수정보: 아이디, 이름, 성별, 출생년도, 비밀번호, 이메일</li>
          <li className={styles.disclist}>
            나. 서비스 이용 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.<br />(접속로그, 접속IP정보, 쿠키, 방문 일시, 서비스 이용기록, 불량 이용 기록)</li>
        </li>


        <li className={styles.li}>
          대표 누리집에서 이용자 회원가입 시 직접 개인정보를 입력 및 수정하여 개인정보를 수집합니다.</li>
        <li className={styles.li}>
          수집 개인정보의 이용목적
          <li className={styles.disclist2}>
            회원가입, 회원활동 실적 관리, 회원탈퇴 의사 확인 등 회원관리</li>
          <li className={styles.disclist2}>
            제공되는 서비스 이용에 관한 인구통계학적 분석, 서비스 방문 및 이용기록 분석, 관심사에 기반한 맞춤형 서비스 등 제공</li>
        </li>
        <div className={styles.checkboxs1}>
            <label htmlFor="checkbox3" className={styles.label}>
              <input
                className={`${styles.checkbox} ${
                  checkbox3 ? styles.RegisterActive : ""
                }`}
                type="checkbox"
                id="checkbox3"
                onClick={() => setCheckbox3(!checkbox3)}
              />
              (필수)동의
            </label>
            <label htmlFor="checkbox4" className={styles.checkbox}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id="checkbox4"
              
              />
              비동의
            </label>
        </div>
      </div>
    </div>
  
    <div className={styles.buttonA} onClick={onClickHandler}>동의
    </div>
  </div>

  );
}
