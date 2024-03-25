import contentStyle from './Content_login.module.css'
import { Link } from 'react-router-dom';
import { getMemberList } from '../../apis/memberAPI';
import { useState, useEffect } from 'react';


function Content_phoneLogin(){

    const [memberList, setMemberList]=useState([]);
    const [phone , setPhone] = useState("")
    const [activeNumber , setActiveNumber] = useState()
    const [random ,setRandom]=useState();


    useEffect(
        ()=>{
            setMemberList(getMemberList());
            setRandom(Math.floor(Math.random()*(9999-100)+1111)+1)
        },
        []
        )
        
        const onIdChange=(e)=>{
            setPhone(e.target.value)
        }
        const onAcvChange=(e)=>{
            setActiveNumber(e.target.value)
        }
        function randomsNumber(){
            if(phone === memberList.members[0].phoneNumber || phone === memberList.members[1].phoneNumber||phone === memberList.members[2].phoneNumber ){
                console.log(random)
                alert(`인증 번호가 전송 되었습니다. \n${random}`)
            }else{
                alert('전화 번호를 입력해 주세요.')
            }
        }


    const onClickHandler=()=>{
        if(phone==="" || activeNumber===0){
            alert('전화번호 또는 인증번호를 입력해 주세요');
            setPhone("")
            setActiveNumber("")
        }else if(phone===memberList.members[0].phoneNumber && activeNumber==random){
            alert('로그인 완료')
            setPhone("")
            setActiveNumber("")
        }else if(phone===memberList.members[1].phoneNumber && activeNumber==random){
            alert('로그인 완료')
            setPhone("")
            setActiveNumber("")
        }else if(phone===memberList.members[2].phoneNumber && activeNumber==random){
            alert('로그인 완료')
            setPhone("")
            setActiveNumber("")
        }else{
            alert('인증번호가 틀렸습니다.')
            console.log(random)
            console.log(activeNumber)
            setPhone("")
            setActiveNumber("")
        }
    }

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
                        <input onChange={onIdChange} value={phone} className={contentStyle.inputBox} type='text' id='id' placeholder='+82 | 전 화 번 호' />
                        <button onClick={randomsNumber} value={random} className={contentStyle.phoneButton}>인증번호</button>
                    </div>
                    <div className={contentStyle.input}>
                        <input onChange={onAcvChange} value={activeNumber} className={contentStyle.inputBox} type='number' id='Act' placeholder='인 증 번 호'/>
                    </div>
                    <div className={contentStyle.text}>
                        <ul className={contentStyle.loginCheackBox}>
                            <Link target='_blank' to='https://www.google.com/search?q=%EC%9D%B8%EC%A6%9D+%EB%B2%88%ED%98%B8%EA%B0%80+%EC%98%A4%EC%A7%80+%EC%95%8A%EB%82%98%EC%9A%94%3F&&tbm=isch&ved=2ahUKEwi-7smd8YeFAxXBmq8BHdDzB38Q2-cCegQIABAA&oq=%EC%9D%B8%EC%A6%9D+%EB%B2%88%ED%98%B8%EA%B0%80+%EC%98%A4%EC%A7%80+%EC%95%8A%EB%82%98%EC%9A%94%3F&gs_lp=EgNpbWciIuyduOymnSDrsojtmLjqsIAg7Jik7KeAIOyViuuCmOyalD9IwRtQ1wVY5hlwAngAkAEAmAFfoAHFCKoBAjEyuAEDyAEA-AEBigILZ3dzLXdpei1pbWeIBgE&sclient=img&ei=Xnv9Zb7HDcG1vr0P0Oef-Ac&bih=911&biw=1920&prmd=ivsnmbz#imgrc=umLVt8hU_8hZSM'>
                            <li className={contentStyle.loginSave} >인증 번호가 오지 않나요?</li>{/*테스트겸 따로 링크 alert 써야하나? 아니면 다른 방법?*/} 
                            </Link>
                        </ul>
                    </div>

                    <div>
                        <Link to="" className={contentStyle.text_button}>
                        <button onClick={onClickHandler} className={contentStyle.button}>로그인</button>
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
