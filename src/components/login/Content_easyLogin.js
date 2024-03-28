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
                        <Link to="../easyLogin" className={contentStyle.on} role='tab'>
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
                        <Link target='_blank' to='https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/'>
                            <img className={contentStyle.easyLoginButton} src='/NaverLogin.jpg' alt="네이버이미지" />
                        </Link>
                    </div>
                    <div className={contentStyle.input}>
                        <Link target='_blank' to='https://www.facebook.com/'>
                        <img className={contentStyle.easyLoginButton} src='/faceBookLogin.jpg' alt="페이스북이미지"/>
                        </Link>
                    </div>
                    <div className={contentStyle.input}>
                        <Link target='_blank' to='https://accounts.kakao.com/login/?continue=https%3A%2F%2Fcs.kakao.com%2F#login'>
                        <img className={contentStyle.easyLoginButton} src='/kakaoLogin.png' alt="카카오이미지"/>
                        </Link>
                    </div>                    
                    <div className={contentStyle.text}>
                        <ul className={contentStyle.loginCheackBox}>

                        </ul>
                    </div>
                    


                    <div>
                        <ul className={contentStyle.ul2}>
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

export default Content_easyLogin;
