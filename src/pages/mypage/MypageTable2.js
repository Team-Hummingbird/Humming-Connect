import {useState, useEffect} from 'react'
import { getMemberList } from '../../apis/memberAPI';
import contentStyle from './Content_mypage.module.css'
import { Link } from 'react-router-dom';

function Mypage2(props){

    const [memberList]=useState(getMemberList());
    const [artsy, setArtsy] = useState([]);
    useEffect(() => {
        setArtsy(JSON.parse(props.props));
    }, [props.props]);

    // console.log(JSON.parse(props.props));

            // function Name(){
                // 함수로 로그인한 name 불러오기
                // }
                
                return (
                    <>
                        <div className={contentStyle.mainDiv} id='상단'>
                            <div className={contentStyle.mainText}>
                                <h1>MY PAGE</h1>
                            </div>
                            <ul className={contentStyle.ul}>
                                <li className={contentStyle.li}>
                                    <img className={contentStyle.imgSize} src='/propile2.png' alt="json 프로필?" />
                                </li>
                                <li className={contentStyle.li}>
                                    <p className={contentStyle.text}>{`${memberList.members[0].name} 님`}</p>
                                    <p className={contentStyle.text}>member since 2024</p>
                                </li>
                            </ul>
                        </div>


            
                        <br />
                        <hr className={contentStyle.line} />
                        <br />
            
                        <div className={contentStyle.mainDiv}>
                        <ul>
                                <li><Link to="../mypage"><p id='table1' className={contentStyle.pointer}>주문 조회</p></Link></li>
            
                                <li><Link to="../mypage2"><p id='table2' className={contentStyle.onPoint}>개인 판매 목록</p></Link></li>
            
                                <li><Link to=""><p id='table3' className={contentStyle.pointer}>내 정보 수정</p></Link></li>
                            </ul>
                        </div>


            
                        <div className={contentStyle.tableDiv}>
                            <ul className={contentStyle.ul2}>
                                <li className={contentStyle.li2}><p>ITEM</p></li>
                                <li className={contentStyle.li3}><p>판매일</p></li>
                                <li className={contentStyle.li2}><p>구매자</p></li>
                                <li className={contentStyle.li2}><p>판매상태</p></li>
                                <hr className={contentStyle.line2} />
                            </ul>
                        </div>


            
                        <div className={contentStyle.tableDiv}>
                            <ul className={contentStyle.ul2}>
                                <li className={contentStyle.tli2}>
                                    <img className={contentStyle.itemImgSize} src={artsy[13]?.imgUrl} alt="" />
                                    <p className={contentStyle.li}>
                                        {artsy[13]?.artist}
                                        <p className={contentStyle.titleText}>{`${artsy[13]?.title} / ${artsy[13]?.date}`}</p>
                                        <p>{`${artsy[13]?.price?.toLocaleString()}원`}</p>
                                    </p>
                                    <br />
                                </li>
                                <li className={contentStyle.tli4}>
                                    <p className={contentStyle.li}>
                                        {memberList.members[0]?.sellData[0]?.date}
                                    </p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </li>
                                <li className={contentStyle.tli5}>
                                    <p>- - - - - - -</p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </li>
                                <li className={contentStyle.tli5} style={{color:'green'}}>
                                    <p style={{color:'blue'}}>
                                    판매중
                                    </p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </li>
                                <hr className={contentStyle.line2} />
                            </ul>


            
                            <ul className={contentStyle.ul2}>
                                <li className={contentStyle.tli2}>
                                    <img className={contentStyle.itemImgSize} src={artsy[35]?.imgUrl} alt="" />
                                    <p className={contentStyle.li}>
                                        {artsy[35]?.artist}
                                        <p className={contentStyle.titleText}>{`${artsy[35]?.title} / ${artsy[35]?.date}`}</p>
                                        <p>{`${artsy[35]?.price?.toLocaleString()}원`}</p>
                                    </p>
                                    <br />
                                </li>
                                <li className={contentStyle.tli4}>
                                    <p className={contentStyle.li}>
                                        {memberList.members[2]?.sellData[0]?.date}
                                    </p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </li>
                                <li className={contentStyle.tli5}>
                                    <p>-박상철 님-</p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </li>
                                <li className={contentStyle.tli5}>
                                    <p style={{color:'red'}}>
                                    {memberList.members[2]?.buyData[0]?.orderStatus}
                                    </p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </li>
                                <hr className={contentStyle.line2} />
                            </ul>


                            <ul className={contentStyle.ul2}>
                                <li className={contentStyle.tli2}>
                                    <img className={contentStyle.itemImgSize} src={artsy[10]?.imgUrl} alt="" />
                                    <p className={contentStyle.li}>
                                        {artsy[10]?.artist}
                                        <p className={contentStyle.titleText}>{`${artsy[10]?.title} / ${artsy[10]?.date}`}</p>
                                        <p>{`${artsy[10]?.price?.toLocaleString()}원`}</p>
                                    </p>
                                    <br />
                                </li>
                                <li className={contentStyle.tli4}>
                                    <p className={contentStyle.li}>
                                        {memberList.members[2]?.sellData[0]?.date}
                                    </p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </li>
                                <li className={contentStyle.tli5}>
                                    <p>-김수완 님-</p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </li>
                                <li className={contentStyle.tli5}>
                                    <p style={{color:'red'}}>
                                    {memberList.members[2]?.buyData[0]?.orderStatus}
                                    </p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </li>
                                <hr className={contentStyle.line2} />
                            </ul>

                        </div>
                    </>
                );
            }
            

export default Mypage2;