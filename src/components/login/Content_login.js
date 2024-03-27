import contentStyle from './Content_login.module.css'
import { getMemberList } from '../../apis/memberAPI';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

// import { Profile } from '../../data/';
    

function Content_login(){

const [memberList, setMemberList]=useState([]);
const [id , setId] = useState("")
const [pwd , setPwd] = useState("")
const [isLogin, setIsLogin]=useState(false)


    useEffect(
        ()=>{
            setMemberList(getMemberList());
            
        },
        []
        
    )
    const onIdChange=(e)=>{
        setId(e.target.value)
    }
    const onPwdChange=(e)=>{
        setPwd(e.target.value)
    }

    const onClickHandler=()=>{
        if(id==="" || pwd===""){
            alert('아이디 또는 패스워드를 입력해 주세요');
            // <Link to="/main/"></Link>
            setId("")
            setPwd("")
        }else if(id===memberList.members[0].id && pwd===memberList.members[0].password){
            alert('로그인 완료')
            // <NavLink to=""></NavLink>
            setId("")
            setPwd("")
        }else if(id===memberList.members[1].id && pwd===memberList.members[1].password){
            alert('로그인 완료')
            // <NavLink to=""></NavLink>
            setId("")
            setPwd("")
        }else if(id===memberList.members[2].id && pwd===memberList.members[2].password){
            alert('로그인 완료')
            // <NavLink to=""></NavLink>
            setId("")
            setPwd("")
        }else{
            alert('아이디 또는 패스워드가 틀렸습니다.')
            console.log(memberList.members[0])
            // <NavLink></NavLink>
            setId("")
            setPwd("")
        }
    }

    return(
        <>
        <div>
            <div className={contentStyle.contentInner}> 
                <ul className={contentStyle.ul}>
                    <li className={contentStyle.li}>
                        <Link to="../login" className={contentStyle.on} role='tab'>
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
                        <input onChange={onIdChange} value={id} className={contentStyle.inputBox} type='id' id='id' placeholder='아 이 디' />
                    </div>
                    <div className={contentStyle.input}>
                        <input onChange={onPwdChange} value={pwd} className={contentStyle.inputBox} type='password' id='password' placeholder='패 스 워 드'/>
                    </div>
                    <div className={contentStyle.text}>
                        <ul className={contentStyle.loginCheackBox}>
                            <li><input id="keep" type='checkbox'/></li>
                            <label htmlFor="keep" className={contentStyle.loginSave}>로그인 유지</label> 
                            
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

export default Content_login;
