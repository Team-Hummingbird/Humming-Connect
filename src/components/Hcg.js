import Hccg from "./Hcg.module.css"

function Hcg() {
    return (
        <div className={Hccg.HcgText}>
            <img 
                    alt="자물쇠 모양"
                    src="img/image 52.png"/>
                    <p className={Hccg.b1}>안심 결제</p> 
                    <img
                    alt="돈 모양"
                    src="img/image 53.png"/>
                    <p className={Hccg.b2}>환불 보장</p>
                    <img
                    alt="체크 모양"
                    src="img/image 54.png"/>
                    <p className={Hccg.b3}>진품 보장</p>
            </div>
    );
}

export default Hcg;