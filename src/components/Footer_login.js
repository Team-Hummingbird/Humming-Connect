import footerStyle from './Footer_login.module.css'
function Footer_login(){


    return(
        <footer className={footerStyle.footer}>
            <div className={footerStyle.footerInner}>
                <ul className={footerStyle.ul}>
                    <li className={footerStyle.li}>
                        <a>
                            <span className={footerStyle.text}>About us</span>
                        </a>
                    </li>
                    <li className={footerStyle.li}>
                        <span className={footerStyle.text}>|</span>
                        <a>
                            <span className={footerStyle.text}>Terms of Use</span>
                        </a>
                        <span className={footerStyle.text}>|</span>
                    </li>
                    <li className={footerStyle.li}>
                        <a>
                            <span className={footerStyle.text}>Privacy Policy</span>
                        </a>
                    </li>
                </ul>
                <ul className={footerStyle.copyRights}>2024 Humming Connect . All Rights Reserved</ul>
            </div>
        </footer>
    )
}

export default Footer_login;