import {useState, useEffect} from 'react'
import { getMemberList } from '../../apis/memberAPI';
import contentStyle from './Content_mypage.module.css'
import { Link } from 'react-router-dom';

function Mypage(props){

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
                        <br />
                        <hr className={contentStyle.line} />
                        <br />
                        </div>


            
            
                        <div className={contentStyle.mainDiv}>
                            <ul>
                                <li><Link to="../mypage"><p id='table1' className={contentStyle.onPoint}>주문 조회</p></Link></li>
            
                                <li><Link to="../mypage2"><p id='table2' className={contentStyle.pointer}>개인 판매 목록</p></Link></li>
            
                                <li><Link to="../mypage3"><p id='table3' className={contentStyle.pointer}>내 정보 수정</p></Link></li>
                            </ul>
                        </div>


                    
                        <div className={contentStyle.tableDiv}>
                            <ul className={contentStyle.ul2}>
                                <li className={contentStyle.li3}><p>ITEM</p></li>
                                <li className={contentStyle.li2}><p>구매일</p></li>
                                <li className={contentStyle.li4}><p>배송비</p></li>
                                <li className={contentStyle.li2}><p>주문상태</p></li>
                                <hr className={contentStyle.line2} />
                            </ul>
                        </div>


            
                        <div className={contentStyle.tableDiv}>
                            <ul className={contentStyle.ul2}>
                                <li className={contentStyle.tli2}>
                                <Link to='../detail'><img className={contentStyle.itemImgSize} src={artsy[20]?.imgUrl} alt="" />
                                    <p className={contentStyle.liItem}>
                                        {artsy[20]?.artist}
                                        <p className={contentStyle.titleText}>{`${artsy[20]?.title} / ${artsy[20]?.date!=null? artsy[20]?.date : 'Unown'}`}</p>
                                        <p>{`${artsy[20]?.price?.toLocaleString()}원`}</p>
                                        
                                    </p>
                                    </Link>
                                    <br />
                                </li>
                                <li className={contentStyle.tli4}>
                                    <p className={contentStyle.li}>
                                        {memberList.members[0]?.buyData[0]?.date}
                                    </p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </li>
                                <li className={contentStyle.tli5}>
                                    <p>50,000원</p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </li>
                                <li className={contentStyle.tli5} style={{color:'green'}}>
                                    <p>
                                    {memberList.members[1]?.buyData[0]?.orderStatus}
                                    </p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </li>
                                <hr className={contentStyle.line2} />
                            </ul>


            
                            <ul className={contentStyle.ul2}>
                                <li className={contentStyle.tli2}>
                                <Link to='../detail'><img className={contentStyle.itemImgSize} src={artsy[1]?.imgUrl} alt="" />
                                    <p className={contentStyle.liItem2}>
                                        {artsy[1]?.artist}
                                        <p className={contentStyle.titleText}>{`${artsy[1]?.title} / ${artsy[1]?.date!=null? artsy[1]?.date : 'Unown'}`}</p>
                                        <p>{`${artsy[1]?.price?.toLocaleString()}원`}</p>
                                        
                                    </p>
                                    </Link>
                                    <br />
                                </li>
                                <li className={contentStyle.tli4}>
                                    <p className={contentStyle.li}>
                                        {memberList.members[1]?.buyData[0]?.date}
                                    </p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </li>
                                <li className={contentStyle.tli5}>
                                    <p>50,000원</p>
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
                                <Link to='../detail'><img className={contentStyle.itemImgSize} src={artsy[48]?.imgUrl} alt="" />
                                    <p className={contentStyle.liItem}>
                                        {artsy[48]?.artist}
                                        <p className={contentStyle.titleText}>{`${artsy[48]?.title} / ${artsy[48]?.date!=null? artsy[48]?.date : 'Unown' }`}</p>
                                        <p>{`${artsy[48]?.price?.toLocaleString()}원`}</p>
                                        
                                    </p>
                                    </Link>
                                    <br />
                                </li>
                                <li className={contentStyle.tli4}>
                                    <p className={contentStyle.li}>
                                        {memberList.members[2]?.buyData[0]?.date}
                                    </p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </li>
                                <li className={contentStyle.tli5}>
                                    <p>50,000원</p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </li>
                                <li className={contentStyle.tli5} >
                                    <p style={{color:'green'}}>
                                    {memberList.members[0]?.buyData[0]?.orderStatus}
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
            

export default Mypage;