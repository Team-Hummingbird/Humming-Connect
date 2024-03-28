import contentStyle from './Content_login.module.css'
import { Link } from 'react-router-dom';
import { getMemberList } from '../../apis/memberAPI';
import { useState, useEffect } from 'react';
import popStyle from '../../components/PopUp.module.css';


function Content_phoneLogin(){

    const [memberList, setMemberList]=useState([]);
    const [phone , setPhone] = useState("")
    const [activeNumber , setActiveNumber] = useState()
    const [random ,setRandom]=useState();
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [text, setText]=useState("");
    const [text2, setText2]=useState("");

    const openPopUp = () => {
        setIsPopUpOpen(true)
    }
    
    function PopUp(){
    
      //확인 버튼 클릭시, 팝업창 비활성화
        const onClickHandler = (e) => {
        e.target.parentNode.style.display = 'none';
        e.target.parentNode.previousSibling.style.display = 'none';
        setIsPopUpOpen(false)
        }
        
    
        return(
        <>
            <div className={popStyle.popBg}></div>
            <div className={popStyle.popUp_cont}>
                <p className={popStyle.popText}>{text}</p>
                <p className={popStyle.popText}>{text2}</p>
                <button className={popStyle.popBtn} onClick={onClickHandler}>확인</button>
            </div>
        </>
        );
    }

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
                setText("인증 번호가 전송 되었습니다.")
                setText2(`인증 번호 : ${random}`)
                openPopUp(true)
            }else{
                setText("전화 번호를 입력해 주세요.")
                setText2("")
                openPopUp(true)
            }
        }


    const onClickHandler=()=>{
        if(phone==="" || activeNumber===""){
            setText("가입된 전화번호가 아닙니다.")
            setText2("확인후 다시 입력해 주세요.")
            openPopUp(true)
            setPhone("")
            setActiveNumber("")
        }else if(phone===memberList.members[0].phoneNumber && activeNumber==random){
            
            setPhone("")
            setActiveNumber("")
        }else if(phone===memberList.members[1].phoneNumber && activeNumber==random){
            
            setPhone("")
            setActiveNumber("")
        }else if(phone===memberList.members[2].phoneNumber && activeNumber==random){

            setPhone("")
            setActiveNumber("")
        }else{
            setText("인증번호가 틀렸습니다")
            setText2("확인후 다시 입력해 주세요.")
            console.log(random)
            console.log(activeNumber)
            openPopUp(true)
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
                        <Link to="../phoneLogin" className={contentStyle.on} role='tab'>
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
    {isPopUpOpen && PopUp()}
        </>
    )
}

export default Content_phoneLogin;
