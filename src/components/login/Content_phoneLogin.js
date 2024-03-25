import contentStyle from './Content_login.module.css'
import { Link } from 'react-router-dom';

function Content_phoneLogin(){


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
                        <Link to="../easyLogin" className={contentStyle.menuId} role='tab'>
                            <span>간편 로그인</span>
                        </Link>
                        </li>
                    <li className={contentStyle.li}>
                        <Link to="" className={contentStyle.on} role='tab'>
                            <span>전화번호 로그인</span>
                        </Link>
                        </li>
                </ul>
            </div>

        <div className='idTap'>
            <div className={contentStyle.loginDiv}>
                <div className={contentStyle.loginBox}>
                    <div className={contentStyle.input}>
                        <input className={contentStyle.inputBox} type='text' id='id' placeholder='+82 | 전화번호' />
                        <button className={contentStyle.phoneButton}>인증번호</button>
                    </div>
                    <div className={contentStyle.input}>
                        <input className={contentStyle.inputBox} type='text' id='id' placeholder='인 증 번 호'/>
                    </div>
                    <div className={contentStyle.text}>
                        <ul className={contentStyle.loginCheackBox}>
                            <Link target='_blank' to='https://www.google.com/search?q=%EC%9D%B8%EC%A6%9D+%EB%B2%88%ED%98%B8%EA%B0%80+%EC%98%A4%EC%A7%80+%EC%95%8A%EB%82%98%EC%9A%94%3F&&tbm=isch&ved=2ahUKEwi-7smd8YeFAxXBmq8BHdDzB38Q2-cCegQIABAA&oq=%EC%9D%B8%EC%A6%9D+%EB%B2%88%ED%98%B8%EA%B0%80+%EC%98%A4%EC%A7%80+%EC%95%8A%EB%82%98%EC%9A%94%3F&gs_lp=EgNpbWciIuyduOymnSDrsojtmLjqsIAg7Jik7KeAIOyViuuCmOyalD9IwRtQ1wVY5hlwAngAkAEAmAFfoAHFCKoBAjEyuAEDyAEA-AEBigILZ3dzLXdpei1pbWeIBgE&sclient=img&ei=Xnv9Zb7HDcG1vr0P0Oef-Ac&bih=911&biw=1920&prmd=ivsnmbz#imgrc=umLVt8hU_8hZSM'>
                            <li className={contentStyle.loginSave} >인증 번호가 오지 않나요?</li>{/*테스트겸 따로 링크 alert 써야하나? 아니면 다른 방법?*/} 
                            </Link>
                        </ul>
                    </div>

                    <div>
                        <Link to="../main" className={contentStyle.text_button}>
                        <button className={contentStyle.button}>로그인</button>
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

export default Content_phoneLogin;
