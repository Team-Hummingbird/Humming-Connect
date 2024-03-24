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
                        <Link target='_blank' to='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&service=accountsettings&ifkv=ARZ0qKKUokM4Q8w_C_ltQaR4btzDxegO1Uov5eYp7yNSyyfWhDHCuwVi1E1GWMqqcs2mSiz8adgtlQ&theme=mn&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin'>
                            <img className={contentStyle.easyLoginButton} src='/gogleLogin.png' alt="구글이미지" />
                        </Link>
                    </div>
                    <div className={contentStyle.input}>
                        <Link target='_blank' to='https://www.facebook.com/'>
                        <img className={contentStyle.easyLoginButton} src='/faceBookLogin.png' alt="페이스북이미지"/>
                        </Link>
                    </div>
                    <div className={contentStyle.input}>
                        <Link target='_blank' to='https://www.icloud.com/'>
                        <img className={contentStyle.easyLoginButton} src='/appleLogin.png' alt="애플이미지"/>
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
