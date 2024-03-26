import style from "./About.module.css"

function About() {
    
    return (

    <div className={style.div}>
        <div className={style.company} >
            <img 
            className={style.companyImg}
            alt="사진"
            src="aboutPageImg.png"
            />
        </div>

        <span>&nbsp;</span>

        <div className={style.aboutWrapper}>
            <div className={style.aboutContainer}>

            <p className={style.p}>
            <b>회사소개</b>
            </p>

            <span>&nbsp;</span>

            <p className={style.a}>
            <span>
                Humming Connect는 여러분의 문화와 예술공간을 연결해드립니다.
            </span>
            </p>

            <span>&nbsp;</span>

            <p className={style.b}>
                <span>
                    전문가부터 일반인까지 대중이 참여하고 소통하는 공간 누구 하나 차별되지 않고 다양한 서비스를 경험하실수 있습니다.
                </span>
            </p>

            <p>
                <span className={style.c}>
                    그림들을 사고 팔며 본인이 그린 작품을 팔수도 있고 구매자와 판매자와 대화할 수 있는 허밍 연결 커뮨니티 시스템까지
                </span>
            </p>

            <p>
                <span className={style.d}>
                    지쳤을 때 힐링할수 있고 지금껏 본적 없는 새로운 일들을 경험 하세요
                </span>
            </p>

            <p>
                <span className={style.e}>
                    지금 찾아오세요 Humming Connect
                </span>
            </p>

        
            <div className={style.companyLogo}>
                <a href="/Main">
                <img 
                alt=""
                src="aboutPageLogo.png"
                />
                </a>
            </div>
            
        </div>
    </div>
    
            <hr className={style.line}/>

        <div className={style.all}>

            <div className={style.cont1}>
            <p className={style.p5}>
                <b>미술품 거래정보 제공</b>
            </p>
            
                <span>&nbsp;</span>
                <span>&nbsp;</span>
            
            <p className={style.o5}>
                개인 작품 및 유명 작품을 다루다보니 수많은<br/> 
                그림들과 작가분들을 만나보실 수 있습니다.
            </p>
            </div>

            <div className={style.cont2}>
            <p className={style.p6}>
                <b>Humming Community</b>
            </p>

                <span>&nbsp;</span>
                <span>&nbsp;</span>
            
            <p className={style.o6}>
                활발한 커뮤니티 활성화 '허밋 연결' 활성화<br/>
                많은 사람들과 예술에 관해 이야기 해보고<br/>
                구매하고 싶고 판매하고 싶은 내용에 관해<br/>
                이야기 해보실 수 있습니다.
            </p>
            </div>

            <div className={style.cont3}>
            <p className={style.p7}>
                <b>안전한 인증 서비스</b>
            </p>

                <span>&nbsp;</span>
                <span>&nbsp;</span>

            <p className={style.o7}>
                전화번호 인증 및 안심번호 서비스를 기반하여<br/>
                안전한 서비스를 이용하실 수 있습니다.
            </p>
            </div>

        </div>
    </div>
    );
}
export default About;