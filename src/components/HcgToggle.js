import { useState } from "react";
import Tstyle from "./HcgToggle.module.css"

export default function HcgToggle({ context }) {
    const [isOpen, setIsOpen ] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div>
                <div>{context}</div>
                {isOpen ? (
                    <img src="img/Vector 2.png" alt="아래 방향 화살표" onClick={handleToggle} />
                ) : (
                    <img src="img/Vector 1.png" alt="윗 방향 화살표" onClick={handleToggle} />
                )}
            </div>
            <p style={{ display: isOpen ? "block" : "none"}}>
                    <img 
                    alt="자물쇠 모양"
                    src="img/image 52.png"/>
                    <p className={Tstyle.HToggle1}>안심 결제</p> 
                    <img
                    alt="돈 모양"
                    src="img/image 53.png"/>
                    <p className={Tstyle.HToggle2}>환불 보장</p>
                    <img
                    alt="체크 모양"
                    src="img/image 54.png"/>
                    <p className={Tstyle.HToggle3}>진품 보장</p>
            </p>
        
        </>
    )
}