import contentStyle from './Content_login.module.css'
import { Link } from 'react-router-dom';

function Content_find_id(){
    function btn(){
        alert('인증 번호가 전송 되었습니다.');
    }
    function btn2(){
        alert('입력하신 휴대폰 번호로 \n아이디가 전송 되었습니다.');
    }
    

    return(
        <>
        <div className={contentStyle.contentInner}>
            <div>
                <div className={contentStyle.findIdBox}>
                    <div className={contentStyle.text_find} >
                        아이디 찾기
                    </div>
                    <div className={contentStyle.input}>
                        <input className={contentStyle.inputBox} type='text' id='id' placeholder='이 름' />
                    </div>
                    <div className={contentStyle.input}>
                        <input className={contentStyle.inputBox} type='text' id='id' placeholder='+82 | 전 화 번 호' />
                        <button onClick={btn} className={contentStyle.phoneButton}>인증번호</button>
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
                        <Link to="../login" className={contentStyle.text_button}>
                        <button onClick={btn2} className={contentStyle.button}>아이디 찾기</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Content_find_id;
