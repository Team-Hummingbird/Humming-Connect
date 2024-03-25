import { Link } from 'react-router-dom';
import footerStyle from './Footer_login.module.css'
function Footer_login(){


    return(
        <footer className={footerStyle.footer}>
            <div className={footerStyle.footerInner}>
                <ul className={footerStyle.ul}>
                    <li className={footerStyle.li}>
                        <Link to='./aboutas'>
                            <span className={footerStyle.text}>About us</span>
                        </Link>
                    </li>
                    <li className={footerStyle.li}>
                        <span className={footerStyle.text}>|</span>
                        <Link>
                            <span className={footerStyle.text}>Terms of Use</span>
                        </Link>
                        <span className={footerStyle.text}>|</span>
                    </li>
                    <li className={footerStyle.li}>
                        <Link>
                            <span className={footerStyle.text}>Privacy Policy</span>
                        </Link>
                    </li>
                </ul>
                <ul className={footerStyle.copyRights}>2024 Humming Connect . All Rights Reserved</ul>
            </div>
        </footer>
    )
}

export default Footer_login;