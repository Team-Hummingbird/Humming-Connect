import contentStyle from './Content_login.module.css'
import { Link } from 'react-router-dom';

function Content_easyLogin(){


    return(
        <>
        <div>
            <div className={contentStyle.contentInner}> 
                <ul className={contentStyle.ul}>
                    <li className={contentStyle.li}>
                        <Link to="../login" className={contentStyle.menuId} role='tab'>
                            <span>ID 로그인</span>
                        </Link>
                    </li>
                    <li className={contentStyle.li}>
                        <Link to="" className={contentStyle.on} role='tab'>
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
                        <img className={contentStyle.easyLoginButton} src='/gogleLogin.png' alt="구글이미지"/>
                    </div>
                    <div className={contentStyle.input}>
                        <img className={contentStyle.easyLoginButton} src='/faceBookLogin.png' alt="페이스북이미지"/>
                    </div>
                    <div className={contentStyle.input}>
                        <img className={contentStyle.easyLoginButton} src='/appleLogin.png' alt="애플이미지"/>
                    </div>


                    <div>
                        <ul className={contentStyle.ul2}>
                            <li className={contentStyle.li}>
                                <a>
                                    <span className={contentStyle.text}>아이디 찾기</span>
                                </a>
                            </li>
                            <li className={contentStyle.li}>
                                <span className={contentStyle.text}>|</span>
                                <a>
                                    <span className={contentStyle.text}>비밀번호 찾기</span>
                                </a>
                                <span className={contentStyle.text}>|</span>
                            </li>
                            <li className={contentStyle.li}>
                                <a>
                                    <span className={contentStyle.text}>회원 가입</span>
                                </a>
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

export default Content_easyLogin;
