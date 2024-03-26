import {useState, useEffect} from 'react'
import { getMemberList } from '../../apis/memberAPI';
import contentStyle from './Content_mypage.module.css'
import { Link } from 'react-router-dom';

function Mypage(props){
    const [memberList]=useState(getMemberList());
    console.log(JSON.parse(props.artList))
    // useEffect(
    //     ()=>{
    //         setMemberList(getMemberList());
    //     },
    //     []
    // )
    

    // function Name(){
    // 함수로 로그인한 name 불러오기
    // }

    return(
        <>
        <div className={contentStyle.mainDiv} id='상단'>
            <div className={contentStyle.mainText}>
            <h1>MY PAGE</h1>
            </div>
            <ul className={contentStyle.ul}>
                <li className={contentStyle.li}>
                    <img className={contentStyle.imgSize} src='/propile2.png' alt="json 프로필?"></img>
                </li>
                <li className={contentStyle.li}>
                    <p className={contentStyle.text}>{`${memberList.members[0].name} 님`}</p>
                    <p className={contentStyle.text}>member since 2024</p>
                </li>
            </ul>
        </div>

        <br/>
        <hr className={contentStyle.line}/>
        <br/>
 
        <div className={contentStyle.mainDiv}>
            <ul>
                <li><Link to=""><p id ='table1' className={contentStyle.onPoint}>주문 조회</p></Link></li>

                <li><p id ='table2' className={contentStyle.pointer}>개인 판매 목록</p></li>

                <li><p id ='table3' className={contentStyle.pointer}>내 정보 수정</p></li>
            </ul>
        </div>

        <div className={contentStyle.tableDiv} >
            <ul className={contentStyle.ul2}>
                <li className={contentStyle.li2}><p>ITEM</p></li>
                <li className={contentStyle.li3}><p>구매일</p></li>
                <li className={contentStyle.li2}><p>배송비</p></li>
                <li className={contentStyle.li2}><p>주문상태</p></li>
                <hr className={contentStyle.line2}/>
            </ul>
        </div>

            <div className={contentStyle.tableDiv}>
                <ul className={contentStyle.ul2}>
                    <li className={contentStyle.tli2}><img className={contentStyle.itemImgSize} src='/img/Img.png'/></li>
                    <li className={contentStyle.tli3}>2</li>
                    <li className={contentStyle.tli2}>3</li>
                    <li className={contentStyle.tli2}>4</li>
                    <hr className={contentStyle.line2}/>
                </ul>
            </div>

        </>
    )
}

export default Mypage;