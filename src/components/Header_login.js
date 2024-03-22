import LogoStyle from './Header_login.module.css'

function Header_login(){

    return(
        <>
            <div className={LogoStyle.logoIcon}>
                <a href="/main">
                    <img src='/logo.png' alt="로고이미지"/>
                </a>
            </div>
            <div className={LogoStyle.logoText}>
                <a className="logoText">
                    HUMMING CONNECT
                </a>
            </div>
        </>
    )
    
}

export default Header_login;
