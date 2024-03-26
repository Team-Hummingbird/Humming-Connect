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
                <li>안심 결제</li> 
                <li>환불 보장</li>      
                <li>진품 보장</li>      
            </ul>
        
        </>
    )
}