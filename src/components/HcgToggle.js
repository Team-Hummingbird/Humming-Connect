import { useState } from "react";

export default function DeliveryToggle({ context }) {
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
            <ul style={{ display: isOpen ? "block" : "none"}}>
                <li>국내 배송</li> 
                <li>제휴배송업체를 통해 배송되며 도서/산간지방의 경우 추가배송비가 부가될 수 있습니다.</li>      
                <li>해외배송*및 더 자세한 문의사항은 </li>      
                <li>고객센터(02-1234-5678)로 문의바랍니다.</li>
            </ul>
        
        </>
    )
}