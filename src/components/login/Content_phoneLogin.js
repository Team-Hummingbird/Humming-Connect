import contentStyle from './Content_login.module.css'
import { NavLink } from 'react-router-dom';

function Content_phoneLogin(){


    return(
        <>
        <div>
            <div className={contentStyle.contentInner}> 
                <ul className={contentStyle.ul}>
                    <li className={contentStyle.li}>
                        <NavLink to="../login" className={contentStyle.menuId} role='tab'>
                            <span>ID 로그인</span>
                        </NavLink>
                    </li>
                    <li className={contentStyle.li}>
                        <NavLink to="../easyLogin" className={contentStyle.menuId} role='tab'>
                            <span>간편 로그인</span>
                        </NavLink>
                        </li>
                    <li className={contentStyle.li}>
                        <NavLink to="" className={contentStyle.on} role='tab'>
                            <span>전화번호 로그인</span>
                        </NavLink>
                        </li>
                </ul>
            </div>

        <div className='idTap'>
            <div className={contentStyle.loginDiv}>
                <div className={contentStyle.loginBox}>
                    <div className={contentStyle.input}>
                        <input className={contentStyle.inputBox} type='text' id='id' placeholder='  아이디' />
                    </div>
                    <div className={contentStyle.input}>
                        <input className={contentStyle.inputBox} type='text' id='id' placeholder='  패스워드'/>
                    </div>
                    <div>
                        <ul className={contentStyle.loginCheackBox}>
                            <input type='checkbox'></input>
                            <a className={contentStyle.text} href='none'>로그인 유지</a>
                        </ul>
                    </div>

                    <div>
                        <button className={contentStyle.button}>로그인</button>
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

export default Content_phoneLogin;
