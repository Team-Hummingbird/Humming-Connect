import headerStyle from './Header.module.css';
import footerStyle from './Footer.module.css';
import { NavLink } from 'react-router-dom';

export default function Footer(){
  return(
    <>
      <div className={`${footerStyle.footer_cont} ${headerStyle.footer_cont} `}>
        <footer className={headerStyle.footer}>
          <div className={headerStyle.logo}>
            <NavLink to='/main'>
              <div className={headerStyle.logoImg}>
                <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="HummingConnect logo"/>
              </div>
              <div className={headerStyle.logoText}>
                <p>Humming</p>
                <p>   Connect</p>
              </div>
            </NavLink>
          </div>
          <ul className={footerStyle.footer_menu}>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='https://www.artsy.net/terms' target='blank_'>Terms of Use</NavLink></li>
            <li><NavLink to='https://www.artsy.net/privacy' target='blank_'>Privacy Policy</NavLink></li>
          </ul>
          <div className={`${headerStyle.footerRight} ${footerStyle.footerRight}`}>
            <ul>
              <li><NavLink to='https://twitter.com/?lang=ko' target='blank_'><img src={`${process.env.PUBLIC_URL}/img/twitterIcon.svg`} alt="twitter icon" /></NavLink></li>
              <li><NavLink to='https://www.facebook.com/groups/discover/?campaign_id=1654852700&partner_id=googlesem&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgMJ_Q4TXOPsp6KqJ7SOVS3cLo_Z1kBeOGwUSH3DRTtU4ddUSmNadUYaAuv4EALw_wcB' target='blank_'><img src={`${process.env.PUBLIC_URL}/img/facebookIcon.svg`} alt="facebook icon" /></NavLink></li>
              <li><NavLink to='https://www.instagram.com/' target='blank_'><img src={`${process.env.PUBLIC_URL}/img/instagramIcon.svg`} alt="instagram icon" /></NavLink></li>
            </ul>
            <p>2024 Humming Connect . All Rights Reserved</p>
          </div>
        </footer>
      </div>  
    </>
  );
}