import { Link } from "react-router-dom";
import detailStyle from "./Detail.module.css"
import { useEffect, useState } from "react";
import HummingConnect from "../components/HummingConnect";
import Delivery from "../components/Delivery";
import Hcg from "../components/Hcg";


function Detail(artWorkList) {

    let [isClicked, setIsClicked] = useState(false);
    let [isDelivery, setIsDelivery] = useState(false);
    let [isHcg, setIsHcg] = useState(false);
    
    const [artsList, setArtsList] = useState([]);

    useEffect(
        () => {
                setArtsList(JSON.parse(artWorkList.props));
        }, [artWorkList.props]);
            
    return (
        
    <div className={detailStyle.All}>
    <div className={detailStyle.On}>
        <div >
            <img
            className={detailStyle.ArtImg}
            src={artsList[0]?.imgUrl}
            alt="작품 이미지"
            />
        </div>

        <div className={detailStyle.DetailBox}>
            <p className={detailStyle.MG}>{artsList[0]?.artist}</p>
            <p className={detailStyle.Sp}>{`${artsList[0]?.title} / ${artsList[0]?.date}`}</p>
            <p className={detailStyle.Aoc}>{artsList[0]?.materials}</p>
            <p className={detailStyle.Size}>{`${artsList[0]?.dimensions_in} | ${artsList[0]?.dimensions_cm}`}</p>
            <div className={detailStyle.Img1}>
                <img
                alt="액자 이미지"
                src="img/photoFrame.png"
                />
                <p className={detailStyle.Uw}>Unique work</p>
            </div>
            <div className={detailStyle.Img2}>
                <img
                alt="상장 이미지"
                src="img/crapeImg.png"
                />
                <p className={detailStyle.Ica}>Includes a Certificate of Authenticity</p>
            </div>
            <p className={detailStyle.Price}>{`${artsList[0]?.price}₩`}</p>
            <div className={detailStyle.ButtonBox}>
            <Link to="/buy">
            <button className={detailStyle.BuyButton}>구매하기</button>
            </Link>
            <button className={detailStyle.HummingButton} onClick={ () => {setIsClicked(!isClicked)} }>허밍 연결하기</button>
            {isClicked === true ? <HummingConnect/> : null}
            </div>
            <hr className={detailStyle.Hr1}/>
            <div className={detailStyle.DeliveryBox}>
            <div className={detailStyle.DeliveryBtn}>
            <p className={detailStyle.Delivery}>배송 관련 사항</p>
            <button className={detailStyle.btn} onClick={ () => {setIsDelivery(!isDelivery)} }>⌵</button>
            {isDelivery === true ? <Delivery/> : null}
            </div>
            </div>
            <hr className={detailStyle.Hr2}/>
            <div className={detailStyle.HcgBox}>
            <div className={detailStyle.HcgBtn}>
            <p className={detailStyle.Hcg}>Humming Connect Guarantee</p>
            <button className={detailStyle.btn1} onClick={ () => {setIsHcg(!isHcg)} }>⌵</button>
            {isHcg === true ? <Hcg/> : null}
            </div>
            </div>
            <hr className={detailStyle.Hr3}/>
        </div>
    </div>

            <p className={detailStyle.Aw}>Artwork</p>
        <div className={detailStyle.ExplanationBox}>
            <div className={detailStyle.a1}>
            <p className={detailStyle.Material}>소재</p>
            <p className={detailStyle.ExplanationSize}>사이즈</p>
            <p className={detailStyle.Lare}>레어리티</p>
            <p className={detailStyle.Guarantee}>진품 보증서</p>
            </div>
            <div className={detailStyle.a2}>
            <p className={detailStyle.Maoc}>{artsList[0]?.materials}</p>
            <p className={detailStyle.Es}>{`${artsList[0]?.dimensions_in} | ${artsList[0]?.dimensions_cm}`}</p>
            <p className={detailStyle.Lr}>Unique</p>
            <p className={detailStyle.Gt}>포함(Humming Connect 발행)</p>
            </div>
        </div>

        <div className={detailStyle.ExplanationBox2}>
            <div className={detailStyle.box1}>
                <img className={detailStyle.SmallImg}
                alt="작은 이미지"
                src={artsList[0]?.imgUrl}
                />
                <div className={detailStyle.box2}>
                <p className={detailStyle.Mg2}>{artsList[0]?.artist}</p>
                <p className={detailStyle.Am}>{`${artsList[0]?.title} / ${artsList[0]?.date}`}</p>
                </div>
            </div>
                <p className={detailStyle.Explain}>머리카락과 식물을 그린 몰리 그린(Molly Greene)의 감미로운 그림은 종종 마그리트(Magritte)의 초현실주의 스타일을 연상시키는 작품에서 친숙한 것을 익숙하지 않은 것으로 변화시킵니다. 과학, 기술, 젠더, 철학에 학문적으로 관여한 Greene은 자신이 고민하고 있는 주제를 통해 사고하는 수단으로 예술로 전환했습니다. 자신의 갈색 머리를 뮤즈로 삼아 Greene은 자신의 작품인 Ponies(2020)에서 알 수 있듯이 자연스러운 것을 특이한 것으로 바꾸려고 자주 노력했습니다. 그 안에서 그녀의 머리카락은 포니테일 식물로 새로운 생명을 얻었고, Overgrown(2019)에서는 땅바닥에 물결치는 파도 속에 놓여 있고, 그 사이에 식물이 돋아났습니다. 그녀의 작품에 등장하는 동식물은 똑같이 이질적입니다. Watch Yourself(2020)에 등장하는 초자연적인 꽃은 그 자체로 불길한 생명을 갖고 있는 것처럼 보이며, 이는 그녀의 작업에 자주 영향을 미치는 SF 주제를 반영합니다.</p>
        </div>

        </div>
    );
}

export default Detail;