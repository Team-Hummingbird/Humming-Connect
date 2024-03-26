import React from 'react';
import styles from './Sell.module.css';



function Sell () {
    return (
        <>
        <div className={styles.sell}>판매 신청</div>
        <div className={styles.sellInfo}>판매자 정보</div>
        <div className={styles.sellInfoText1}>판매를 원하는 회원님의 정보를 입력해주세요.</div>
        <div className={styles.sellInfoText2}>입력한 정보는 판매신청 제출용으로만 활용됩니다.</div>

    <div className={styles.myInfoCheck}>내 정보 입력</div>
        <div className={styles.checkbox}>
            <input type="checkbox"/>
        </div>
        <div className={styles.sellInfoText3}><span class="red-star">* </span>필수입력항목
        </div>
    <div className={styles.myInfoCheck1}>
        <div className={styles.nameBlockInner}></div>
        <div className={styles.nameBlock}>
            <span>이름 Name </span>
            <span className={styles.redStar}>*</span>
            <span> 예시)허밍커넥트</span>
        </div>
    </div>
    <div className={styles.myInfoCheck2}>
        <div className={styles.phoneBlockInner}></div>
        <div className={styles.phoneBlock}>
            <span>전화번호 Phone Number </span>
            <span className={styles.redStar}>*</span>
            <span> (010-1234-5678) </span>
        </div>
    </div>
    <div className={styles.myInfoCheck3}>
        <div className={styles.emailBlockInner}></div>
        <div className={styles.emailBlock}>
            <span>이메일 Email </span>
            <span className={styles.redStar}>*</span>
            <span> 예시)hummingConnect@hummingConnect.com</span>
        </div>
    </div>
    <div className={styles.artInfo}>작품 정보</div>
    <div className={styles.artInfoText1}>판매를 원하는 작품의 정보를 입력해주세요.</div>
    <div className={styles.artInfoText2}>입력한 정보는 전문가의 감정평가에 사용되므로 정확한 정보를 입력해주세요.
    </div>
    <div className={styles.artInfoText3}><span class={styles.redStar}>※ 불분명한 정보를 입력한 경우, 판매신청이 보류되거나 거절될 수 있습니다. </span>
    </div>
    <div className={styles.artInfoText4}><span class={styles.redStar}>* </span>필수입력항목
    </div>
    <div className={styles.artInfoCheck1}>
        <div className={styles.artistBlockInner}></div>
        <div className={styles.artistBlock}>
            <span>작가명 Artist </span>
            <span className={styles.redStar3}>*</span>
        </div>
    </div>
    <div className={styles.artInfoCheck2}>
        <div className={styles.titleBlockInner}></div>
        <div className={styles.titleBlock}>
            <span>작품명 Title</span>
            <span className={styles.redStar4}>*</span>
        </div>
    </div>
    <div className={styles.artInfoCheck3}>
        <div className={styles.yearBlockInner}></div>
        <div className={styles.yearBlock}>
            <span>작품 제작 연도 Year</span>
            <span className={styles.redStar5}>*</span>
        </div>
        </div>
    <div className={styles.artInfoCheck4}>
        <div className={styles.materialsBlockInner}></div>
        <div className={styles.materialsBlock}>
            <span>작품 소재 Materials</span>
            <span className={styles.redStar5}>*</span>
        </div>
        </div>
        <div className={styles.artInfoCheck5}>
            <div className={styles.detailBlockInner}></div>
            <div className={styles.detailBlock}>
                <span>상세 설명(선택 입력 사항)</span>
    </div>
        </div>
        <div className={styles.artImg}>작품 이미지</div>
        <div className={styles.artImgText1}>판매할 작품의 이미지를 등록해주세요.</div>
        <div className={styles.artImgText2}>신속한 승인절차를 위해 고해상도의 이미지를 업로드해주세요.
        </div>
        <div className={styles.addImg}>
            <div className={styles.addImgBlockInner}></div>
            <div className={styles.addImgBlock}>
                <span>이미지 등록 Add Image</span>
                <span className={styles.redStar}>*</span>
                <button class={styles.imageUploadButton}>이미지 등록</button>
                <br/>
                <br/>
                <span className={styles.redStar}>※ 파일형식은 JPG, JPEG, PNG를 지원하며 파일크기는 최대 30MB까지 업로드 가능합니다.</span>
        </div>
        <div className={styles.imgRegister}></div>
        <button className={styles.imgRegister}>판매 신청 등록</button>
    </div>
    </>
    );
}

export default Sell;