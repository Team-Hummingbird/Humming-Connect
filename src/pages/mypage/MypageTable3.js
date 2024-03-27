import { Link } from 'react-router-dom';
import contentStyle from './Content_mypage.module.css'


function Mypage3(){

    function btn(){
        alert('정보 수정 완료')
    }

                return (
                    <>

                        <div className={contentStyle.mainDiv} id='상단'>
                            <div className={contentStyle.mainText}>
                                <h1><p>내 정보 수정</p></h1>
                            </div>
                        </div>
                        <div className={contentStyle.inputDiv}>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>아이디</b><b style={{fontSize:'20px',color:'red'}}>*</b>
                                <input type='text' placeholder='예시)humming1234' className={contentStyle.inputBox}/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>현재 비밀번호</b><b style={{fontSize:'20px',color:'red'}}>*</b>
                                <input type='password' placeholder='현재 비밀번호' className={contentStyle.inputBox}/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>새 비밀번호</b>
                                <input type='password' placeholder='새 비밀번호 확인' className={contentStyle.inputBox}/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>새 비밀번호 확인</b>
                                <input type='password' placeholder='새 비밀번호 확인' className={contentStyle.inputBox}/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>이름</b><b style={{fontSize:'20px',color:'red'}}>*</b>
                                <input className={contentStyle.inputBox} placeholder='예시)홍길동'/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>주소</b>
                                <input className={contentStyle.inputBox2} placeholder='우편 번호' />
                                <button className={contentStyle.button} placeholder='예시)humming1234'>주소 검색</button>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <input className={contentStyle.inputBox} placeholder='상세 주소(동,호수)'/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <input className={contentStyle.inputBox} placeholder='참고 항목'/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>휴대전화</b><b style={{fontSize:'20px',color:'red'}}>*</b>
                                <input className={contentStyle.inputBox} placeholder='예시) 010-1234-5678'/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>이메일</b><b style={{fontSize:'20px',color:'red'}}>*</b>
                                <input className={contentStyle.inputBox} placeholder='예시)hummingConnect@hummingConnect.com'/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <Link to='../mypage'><button className={contentStyle.button2} onClick={btn}>회원 정보 수정</button></Link>
                                <Link to='../mypage'><button className={contentStyle.button3}>취소</button></Link>
                            </div>
                            
                        </div>

                    </>
                );
            }
            

export default Mypage3;