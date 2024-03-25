

import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout(props){
  // 로그인 상태 state from App.js
  const isLogin = props.currentLoginStatus.isLogin;

  // 로그인 상태 state 변경 함수 from App.js
  const setLoginStatus = props.currentLoginStatus.setLoginStatus;
  
  return(
    <>
      <Header currentLoginStatus={{isLogin, setLoginStatus}}/>      
      <Outlet/>
      <Footer/>
    </>
  );
}

