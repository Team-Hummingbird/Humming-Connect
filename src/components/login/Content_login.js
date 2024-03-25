import contentStyle from './Content_login.module.css'
import { Link } from 'react-router-dom';

function Content_login(){

    function btn(){
        alert('아이디 또는 패스워드를 입력해 주세요');
    }
    
    return(
        <>
        <div>
            <div className={contentStyle.contentInner}> 
                <ul className={contentStyle.ul}>
                    <li className={contentStyle.li}>
                        <Link to="" className={contentStyle.on} role='tab'>
                            <span>ID 로그인</span>
                        </Link>
                    </li>
                    <li className={contentStyle.li}>
                        <Link to="../easyLogin" className={contentStyle.menuId} role='tab'>
                            <span>간편 로그인</span>
                        </Link>
                        </li>
                    <li className={contentStyle.li}>

                        
                        <Link to="../PhoneLogin" className={contentStyle.menuId} role='tab'>
                            <span>전화번호 로그인</span>
                        </Link>
                        </li>
                </ul>
            </div>
            

        <div className='idTap'>
            <div className={contentStyle.loginDiv}>
                <div className={contentStyle.loginBox}>
                    <div className={contentStyle.input}>
                        <input className={contentStyle.inputBox} type='text' id='id' placeholder='아 이 디' />
                    </div>
                    <div className={contentStyle.input}>
                        <input className={contentStyle.inputBox} type='text' id='id' placeholder='패 스 워 드'/>
                    </div>
                    <div className={contentStyle.text}>
                        <ul className={contentStyle.loginCheackBox}>
                            <li><input id="keep" type='checkbox'/></li>
                            <label htmlFor="keep" className={contentStyle.loginSave}>로그인 유지</label> 
                            
                        </ul>
                    </div>

                    <div>
                        <Link to="../main" className={contentStyle.text_button}>
                        <button onClick={btn} className={contentStyle.button}>로그인</button>
                        </Link>

                        <ul className={contentStyle.ul3}>
                            <li className={contentStyle.li}>
                                <Link to="../findId">
                                    <span className={contentStyle.text}>아이디 찾기</span>
                                </Link>
                            </li>
                            <li className={contentStyle.li}>
                                <span className={contentStyle.text}>|</span>
                                <Link to="../findPwd">
                                    <span className={contentStyle.text}>비밀번호 찾기</span>
                                </Link>
                                <span className={contentStyle.text}>|</span>
                            </li>
                            <li className={contentStyle.li}>
                                <Link>
                                    <span className={contentStyle.text}>회원 가입</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
        </>
    )
}

export default Content_login;
