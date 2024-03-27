import delivery from "./Delivery.module.css"

function Delivery() {
    return(
    <div className={delivery.DeliveryText}>
                    국내 배송<br/>
                    제휴배송업체를 통해 배송되며 도서/산간지방의 경우 추가배송비가 부가될 수 있습니다.<br/> 
                    해외배송* 및  더 자세한 문의사항은<br/>
                    고객센터(02-1234-5678)로 문의바랍니다.
    </div>
    );
}

export default Delivery;