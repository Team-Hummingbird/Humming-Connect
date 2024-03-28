import { Link } from 'react-router-dom';
import contentStyle from './Content_mypage.module.css'
import { useState, useEffect } from 'react';
import popStyle from '../../components/PopUp.module.css';
import { getMemberList } from '../../apis/memberAPI';


function Mypage3(){
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [text, setText]=useState("");
    const [text2, setText2]=useState("");
    const [memberList, setMemberList]=useState([]);

    const [id, setId]=useState("");
    const [pwd, setPwd]=useState("")
    const [newPwd, setNewPwd]=useState("")
    const [newPwd2, setNewPwd2]=useState("")
    const [name , setName] = useState("")
    const [phone , setPhone] = useState("")
    const [email , setEmail] = useState("")
    
    const openPopUp = () => {
        setIsPopUpOpen(true)
    }
    useEffect(
        ()=>{
            setMemberList(getMemberList());
        },
        []
        )
        
    
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
            <div className={popStyle.popUp_cont}style={{marginTop:'80px'}}>
                <p className={popStyle.popText}>{text}</p>
                <p className={popStyle.popText}>{text2}</p>
                <button className={popStyle.popBtn} onClick={onClickHandler}>확인</button>
            </div>
        </>
        );
    }
    const onClickHandler=()=>{
        if(id===""||pwd===""||phone==="" || name===""||email===""){
            setText("")
            setText2("필수 항목을 입력해 주세요.")
            openPopUp(true)
        }else{
            setText("")
            setText2("수정 요청이 완료 되었습니다.")
            openPopUp(true)
            setId("")
            setPwd("")
            setPhone("")
            setName("")
            setEmail("")
            
        }
    }
    const onIdChange=(e)=>{
        setId(e.target.value)
    }
    const onPwdChange=(e)=>{
        setPwd(e.target.value)
    }
    const onPhoneChange=(e)=>{
        setPhone(e.target.value)
    }
    const onNameChange=(e)=>{
        setName(e.target.value)
    }
    const onEmailChange=(e)=>{
        setEmail(e.target.value)
    }


    function randomsNumber(){
        if(id===""||pwd===""||phone==="" || name===""||phone===""||email===""){
            setText(<img style={{marginTop:'-20px'}} src='/adress.png'/>)
            setText2("")
            openPopUp(true)
        }else{
            setText("가입된 회원 정보가 없습니다.")
            setText2("확인후 다시 입력해 주세요.")
            openPopUp(true)
        }
    }
    
                return (
                    <>
                    <div className={contentStyle.te1}>
                        <div className={contentStyle.mainDiv} id='상단'>
                            <div className={contentStyle.mainText}>
                                <h1><p>내 정보 수정</p></h1>
                            </div>
                            
                        </div>
                        <div className={contentStyle.inputDiv}>
                            <div className={contentStyle.mainDiv}>
                                <p className={contentStyle}><b style={{fontSize:'16px'}}>아이디</b><b style={{fontSize:'20px',color:'red'}}>*</b></p>
                                <input onChange={onIdChange} value={id} type='text' placeholder='예시)humming1234' className={contentStyle.inputBox}/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'16px'}}>현재 비밀번호</b><b style={{fontSize:'20px',color:'red'}}>*</b>
                                <input onChange={onPwdChange} value={pwd} type='password' placeholder='현재 비밀번호' className={contentStyle.inputBox}/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'16px'}}>새 비밀번호</b>
                                <input type='password' placeholder='새 비밀번호 확인' className={contentStyle.inputBox}/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'16px'}}>새 비밀번호 확인</b>
                                <input type='password' placeholder='새 비밀번호 확인' className={contentStyle.inputBox}/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'16px'}}>이름</b><b style={{fontSize:'20px',color:'red'}}>*</b>
                                <input onChange={onNameChange} value={name} className={contentStyle.inputBox} placeholder='예시)홍길동'/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'16px'}}>주소</b>
                                <input className={contentStyle.inputBox2} placeholder='우편 번호' />
                                <button className={contentStyle.button} onClick={randomsNumber}>주소 검색</button>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <input className={contentStyle.inputBox} placeholder='상세 주소(동,호수)'/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <input className={contentStyle.inputBox} placeholder='참고 항목'/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'16px'}}>휴대전화</b><b style={{fontSize:'20px',color:'red'}}>*</b>
                                <input onChange={onPhoneChange} value={phone} className={contentStyle.inputBox} placeholder='예시) 010-1234-5678'/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'16px'}}>이메일</b><b style={{fontSize:'20px',color:'red'}}>*</b>
                                <input onChange={onEmailChange} value={email} className={contentStyle.inputBox} placeholder='예시)hummingConnect@hummingConnect.com'/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <button className={contentStyle.button2} onClick={onClickHandler}>회원 정보 수정</button>
                                <Link to='../mypage'><button className={contentStyle.button3}>취 소</button></Link>
                            </div>
                            
                        </div>
                    </div>
                    {isPopUpOpen && PopUp()}
                    </>
                );
            }
            

export default Mypage3;