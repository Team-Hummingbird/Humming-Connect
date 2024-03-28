import { Link, useParams } from "react-router-dom";
import detailStyle from "./Detail.module.css"
import { useEffect, useState } from "react";
import HummingConnect from "../components/HummingConnect";
import Delivery from "../components/Delivery";
import Hcg from "../components/Hcg";
import { ArtWorkList } from "../data/ArtWorkList";


function Detail(artWorkList) {

    let [isClicked, setIsClicked] = useState(false);
    let [isDelivery, setIsDelivery] = useState(false);
    let [isHcg, setIsHcg] = useState(false);
    
    const {artCode} = useParams();
    const [art, setArt] = useState({
    });

    useEffect(
        () => {
                setArt(JSON.parse(artWorkList.props));
        }, 
        [artWorkList.props]
    );

    console.log(artWorkList.props);
    return (
        
    <div className={detailStyle.All}>
    <div className={detailStyle.On}>
        <div >
            <img
            className={detailStyle.ArtImg}
            src={art[artCode -1]?.imgUrl}
            alt="작품 이미지"
            />
        </div>

        <div className={detailStyle.DetailBox}>
            <p className={detailStyle.MG}>{art[artCode -1]?.artist}</p>
            <p className={detailStyle.Sp}>{`${art[artCode -1]?.title} / ${art[artCode -1]?.date}`}</p>
            <p className={detailStyle.Aoc}>{art[artCode -1]?.materials}</p>
            <p className={detailStyle.Size}>{`${art[artCode -1]?.dimensions_in} | ${art[artCode -1]?.dimensions_cm}`}</p>
            <div className={detailStyle.Img1}>
                <img
                alt="액자 이미지"
                src="/img/photoFrame.png"
                />
                <p className={detailStyle.Uw}>Unique work</p>
            </div>
            <div className={detailStyle.Img2}>
                <img
                alt="상장 이미지"
                src="/img/crapeImg.png"
                />
                <p className={detailStyle.Ica}>Includes a Certificate of Authenticity</p>
            </div>
            <p className={detailStyle.Price}>{`₩${art[artCode -1]?.price.toLocaleString()}`}</p>
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
            </div>
            {isDelivery === true ? <Delivery/> : null}
            </div>
            <hr className={detailStyle.Hr2}/>
            <div className={detailStyle.HcgBox}>
            <div className={detailStyle.HcgBtn}>
            <p className={detailStyle.Hcg}>Humming Connect Guarantee</p>
            <button className={detailStyle.btn1} onClick={ () => {setIsHcg(!isHcg)} }>⌵</button>
            </div>
            {isHcg === true ? <Hcg/> : null}
            </div>
            <hr className={detailStyle.Hr3}/>
        </div>
    </div>

        <div className={detailStyle.down}>
            <p className={detailStyle.Aw}>Artwork</p>
        <div className={detailStyle.ExplanationBox}>
            <div className={detailStyle.a1}>
            <p className={detailStyle.Material}>소재</p>
            <p className={detailStyle.ExplanationSize}>사이즈</p>
            <p className={detailStyle.Lare}>레어리티</p>
            <p className={detailStyle.Guarantee}>진품 보증서</p>
            </div>
            <div className={detailStyle.a2}>
            <p className={detailStyle.Maoc}>{art[artCode -1]?.materials}</p>
            <p className={detailStyle.Es}>{`${art[artCode -1]?.dimensions_in} | ${art[artCode -1]?.dimensions_cm}`}</p>
            <p className={detailStyle.Lr}>Unique</p>
            <p className={detailStyle.Gt}>포함(Humming Connect 발행)</p>
            </div>
        </div>

        <div className={detailStyle.ExplanationBox2}>
            <div className={detailStyle.box1}>
                <img className={detailStyle.SmallImg}
                alt="작은 이미지"
                src={art[artCode -1]?.imgUrl}
                />
                <div className={detailStyle.box2}>
                <p className={detailStyle.Mg2}>{art[artCode -1]?.artist}</p>
                <p className={detailStyle.Am}>{`${art[artCode -1]?.title} / ${art[artCode -1]?.date}`}</p>
                </div>
            </div>
                <p className={detailStyle.Explain}>{art[artCode -1]?.description}</p>
        </div>
        </div>

        </div>
    );
}

export default Detail;