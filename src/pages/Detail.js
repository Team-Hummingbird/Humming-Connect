import detailStyle from "./Detail.module.css"

function Detail() {

    return (
        
    <>
    <div className={detailStyle.On}>
        <div className={detailStyle.ArtImg}>
            <img
            alt="작품 이미지"
            src="img/Img.png"
            />
        </div>

        <div className={detailStyle.DetailBox}>
            <div className={detailStyle.MG}>Molly Greene</div>
            <div className={detailStyle.Sp}>Splinter, 2024</div>
            <div className={detailStyle.Aoc}>Acrylic on canvas</div>
            <div className={detailStyle.Size}>20 x 20 in | 50.8 x 50.8 cm</div>
            <div className={detailStyle.Img1}>
                <img
                alt="액자 이미지"
                src="img/photoFrame.png"
                />
                <div className={detailStyle.Uw}>Unique work</div>
            </div>
            <div className={detailStyle.Img2}>
                <img
                alt="상장 이미지"
                src="img/crapeImg.png"
                />
                <div className={detailStyle.Ica}>Includes a Certificate of Authenticity</div>
            </div>
            <div className={detailStyle.Price}>₩6,500,000</div>
            <div className={detailStyle.ButtonBox}>
            <button className={detailStyle.BuyButton}>구매하기</button>
            <button className={detailStyle.HummingButton}>허밍 연결하기</button>
            </div>
            <hr className={detailStyle.Hr1}/>
            <div className={detailStyle.Delivery}>배송 관련 사항</div>
            <hr className={detailStyle.Hr2}/>
            <div className={detailStyle.Hcg}>Humming Connect Guarantee</div>
            <hr className={detailStyle.Hr3}/>
        </div>
    </div>

            <div className={detailStyle.Aw}>Artwork</div>
        <div className={detailStyle.ExplanationBox}>
            <div className={detailStyle.a1}>
            <div className={detailStyle.Material}>소재</div>
            <div className={detailStyle.Maoc}>Acylic on canvas</div>
            </div>
            <div className={detailStyle.a2}>
            <div className={detailStyle.ExplanationSize}>사이즈</div>
            <div className={detailStyle.Es}>20 x 20 in | 50.8 x 50.8 cm</div>
            </div>
            <div className={detailStyle.a3}>
            <div className={detailStyle.Lare}>레어리티</div>
            <div className={detailStyle.Lr}>Unique</div>
            </div>
            <div className={detailStyle.a4}>
            <div className={detailStyle.Guarantee}>진품 보증서</div>
            <div className={detailStyle.Gt}>포함(Humming Connect 발행)</div>
            </div>
        </div>

        <div className={detailStyle.ExplanationBox2}>
            <div className={detailStyle.SmallImg}>
                <img
                alt="작은 둥근 이미지"
                src=""
                
                />
            </div>



        </div>

        </>
    );
}

export default Detail;