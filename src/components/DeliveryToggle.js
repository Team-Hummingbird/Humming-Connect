import { useState } from "react";
import Tstyle from "./DeliveryToggle.module.css"

export default function DeliveryToggle({ context }) {
    const [isOpen, setIsOpen ] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={Tstyle.Tg}>
                <div>{context}</div>
                {isOpen ? (
                    <img src="img/Vector 2.png" alt="아래 방향 화살표" onClick={handleToggle} />
                ) : (
                    <img src="img/Vector 1.png" alt="윗 방향 화살표" onClick={handleToggle} />
                )}
            </div>
            <p style={{ display: isOpen ? "block" : "none"}} className={Tstyle.DToggle}>
                    국내 배송<br/>
                    제휴배송업체를 통해 배송되며 도서/산간지방의 경우 추가배송비가 부가될 수 있습니다.<br/> 
                    해외배송* 및  더 자세한 문의사항은<br/>
                    고객센터(02-1234-5678)로 문의바랍니다.
            </p>
        
        </>
    )
}
