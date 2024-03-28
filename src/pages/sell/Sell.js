import { useNavigate } from 'react-router-dom';
import styles from './Sell.module.css';
import React, { useEffect, useState } from 'react';
import userProfile from '../../data/Profile.json';




function Sell () {

    const navigate = useNavigate();

    const onClickHandler = () => {
        if (isFormFilled) {
            navigate('/selldone');
        }
    }


    const [isInfoAutoFilled, setIsInfoAutoFilled] = useState(true);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [artistName, setArtistName] = useState('');
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [materials, setMaterials] = useState('');
    const [detail, setDetail] = useState('');
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    const onChangeHandler = () => {
        setIsInfoAutoFilled(!isInfoAutoFilled);
    };

    useEffect(() => {
        if (isInfoAutoFilled) {
            setName(userProfile.name);
            setPhoneNumber(userProfile.phoneNumber);
            setEmail(userProfile.email);
        } else {
          // 자동 채움이 비활성화된 경우, 필드를 비워줍니다.
            setName('');
            setPhoneNumber('');
            setEmail('');
        }
    }, [isInfoAutoFilled, userProfile]);

        useEffect(() => {
            if (!image) {
                setPreviewUrl('');
                return;
            }
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setPreviewUrl(fileReader.result);
            };
            fileReader.readAsDataURL(image);
        }, [image]);
    
        const onChangeImgHandler = (e) => {
            if (e.target.files && e.target.files.length > 0) {
                setImage(e.target.files[0]);
            }
        };
    
    const isFormFilled = name && phoneNumber && email && artistName && title && year && materials && image;



    return (
        <>
        


<div className={styles.sellPage}>
<div className={styles.sell}>판매 신청</div>
    <div className={styles.infoContainer}>
        <div className={styles.sellInfo}>판매자 정보</div>
        <input
                type="checkbox"
                checked={true}
                readOnly
                className={styles.infoCheckbox}
            />
        <div className={styles.myInfoCheck}>내 정보 입력</div>
    </div>

    <div className={styles.sellInfoText1}>판매를 원하는 회원님의 정보를 입력해주세요.</div>
    <div className={styles.sellInfoText2}>입력한 정보는 판매신청 제출용으로만 활용됩니다.</div>


    <div className={styles.sellInfoText3}>
        <span className={styles.redStar}>* </span>필수입력항목
    </div>

    <div className={styles.myInfoCheck1}>
        <div className={styles.nameBlockInner}>
            <div className={styles.nameBlock}>
                <input type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className={isInfoAutoFilled ? `${styles.inputField} ${styles.disabledInput}` : styles.inputField} 
                placeholder='이름 Name * 예시)허밍커넥트'
                disabled={isInfoAutoFilled}
                />
            </div>
        </div>
    </div>
    <div className={styles.myInfoCheck2}>
        <div className={styles.phoneBlockInner}>
            <div className={styles.phoneBlock}>
                <input type="text" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                className={isInfoAutoFilled ? `${styles.inputField} ${styles.disabledInput}` : styles.inputField} 
                placeholder='전화번호 Phone Number * (010-1234-5678) '
                disabled={isInfoAutoFilled}
                />
            </div>
        </div>
    </div>
    <div className={styles.myInfoCheck3}>
        <div className={styles.emailBlockInner}>
            <div className={styles.emailBlock}>
            <input type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={isInfoAutoFilled ? `${styles.inputField} ${styles.disabledInput}` : styles.inputField} 
            placeholder='이메일 Email * 예시)hummingConnect@hummingConnect.com'
            disabled={isInfoAutoFilled}
            />
            </div>
        </div>
    </div>
    <div className={styles.artInfo}>작품 정보</div>
    <div className={styles.artInfoText1}>판매를 원하는 작품의 정보를 입력해주세요.</div>
    <div className={styles.artInfoText2}>입력한 정보는 전문가의 감정평가에 사용되므로 정확한 정보를 입력해주세요.</div>
    <div className={styles.artInfoText3}><span className={styles.redStar}>※ 불분명한 정보를 입력한 경우, 판매신청이 보류되거나 거절될 수 있습니다. </span></div>
    <div className={styles.artInfoText4}><span className={styles.redStar}>* </span>필수입력항목</div>

    <div className={styles.artInfoCheck1}>
        <div className={styles.artistBlockInner}>
            <div className={styles.artistBlock}>
            <input type="text" value={artistName} onChange={(e) => 
                setArtistName(e.target.value)} 
            className={styles.inputField} 
            placeholder='작가명 Artist * '/>
            </div>
        </div>
    </div>

    <div className={styles.artInfoCheck2}>
        <div className={styles.titleBlockInner}>
            <div className={styles.titleBlock}>
            <input type="text" value={title} onChange={(e) => 
                setTitle(e.target.value)} 
            className={styles.inputField} 
            placeholder='작품명 Title *'/>
            </div>
        </div>
    </div>

    <div className={styles.artInfoCheck3}>
        <div className={styles.yearBlockInner}>
            <div className={styles.yearBlock}>
            <input type="text" value={year} onChange={(e) => 
                setYear(e.target.value)} 
            className={styles.inputField} 
            placeholder='작품 제작 연도 Year *'/>
            </div>
        </div>
    </div>

    <div class={styles.artInfoCheck4}>
        <div class={styles.materialsBlockInner}>
            <div class={styles.materialsBlock}>
            <input type="text" value={materials} onChange={(e) => 
                setMaterials(e.target.value)} 
            className={styles.inputField} 
            placeholder='작품 소재 Materials *'/>
            </div>
        </div>
    </div>

    <div className={styles.artInfoCheck5}>
        <div className={styles.detailBlockInner}>
            <div className={styles.detailBlock}>
            <textarea value={detail} onChange={(e) => 
                setDetail(e.target.value)} 
            className={styles.inputFieldDetail} 
            placeholder='상세 설명(선택 입력사항) '/>
            </div>
        </div>
    </div>

    <div className={styles.artImg}>작품 이미지
    </div>

    <div className={styles.artImgText1}>판매할 작품의 이미지를 등록해주세요.
    </div>

    <div className={styles.artImgText2}>신속한 승인절차를 위해 고해상도의 이미지를 업로드해주세요.
    </div>

    <div className={styles.addImg}>
        <div className={styles.addImgBlockInner}>
            <div className={styles.addImgBlock}>
                <span>이미지 등록 Add Image*</span>
                <div className={styles.redStar1}>※ 파일형식은 JPG, JPEG, PNG를 지원하며 파일크기는 최대 30MB까지 업로드 가능합니다.
                <label htmlFor="image-upload" className={styles.imageUploadButton}>
                    이미지 등록
                </label>
                <input
                    type="file"
                    onChange={onChangeImgHandler}
                    accept="image/png, image/jpeg"
                    style={{ display: 'none' }}
                    id="image-upload"
                />
                
            </div>
        </div>
        </div>

        {previewUrl && (
            <div className={styles.imagePreviewContainer}>
                <img src={previewUrl} alt="Preview" className={styles.imagePreview} />
            </div>
)}

    <button
        className={`${styles.imgRegister} ${isFormFilled ? styles.imgRegisterActive : ''}`}
            onClick={onClickHandler }
            disabled={!isFormFilled}>판매 신청 등록
            </button>
            

            </div>
            </div>
        </>
    );
}

export default Sell;