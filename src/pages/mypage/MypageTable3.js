import contentStyle from './Content_mypage.module.css'

function Mypage3(){

                
                return (
                    <>
                        <div className={contentStyle.mainDiv} id='상단'>
                            <div className={contentStyle.mainText}>
                                <h1><p>내 정보 수정</p></h1>
                            </div>
                        </div>
                        <div className={contentStyle.inputDiv}>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>아이디</b><b style={{fontSize:'20px',color:'red'}}>*</b>
                                <input type='text' placeholder='예시)humming1234' className={contentStyle.inputBox}/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>현재 비밀번호</b><b style={{fontSize:'20px',color:'red'}}>*</b>
                                <input type='password' className={contentStyle.inputBox}/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>새 비밀번호</b>
                                <input type='password' className={contentStyle.inputBox}/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>새 비밀번호 확인</b>
                                <input type='password' className={contentStyle.inputBox}/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>이름</b><b style={{fontSize:'20px',color:'red'}}>*</b>
                                <input className={contentStyle.inputBox}/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>이름</b><b style={{fontSize:'20px',color:'red'}}>*</b>
                                <input className={contentStyle.inputBox}/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>이름</b><b style={{fontSize:'20px',color:'red'}}>*</b>
                                <input className={contentStyle.inputBox}/>
                            </div>
                            <div className={contentStyle.mainDiv}>
                                <b style={{fontSize:'20px'}}>이름</b><b style={{fontSize:'20px',color:'red'}}>*</b>
                                <input className={contentStyle.inputBox}/>
                            </div>
                            
                        </div>

                    </>
                );
            }
            

export default Mypage3;