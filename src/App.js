
import Login from '../src/pages/login/Login';
import EasyLogin from '../src/pages/login/EasyLogin'
import PhoneLogin from '../src/pages/login/PhoneLogin';
import FindId from '../src/pages/login/FindId';
import FindPwd from '../src/pages/login/FindPwd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Search from './pages/Search';
import Layout from './layouts/Layout';
// import LayoutLogin from './layouts/LayoutLogin';
import Main from './pages/Main';
import About from './pages/About';
import Detail from './pages/Detail';
import Mypage from './pages/mypage/Mypage';
import Order from './pages/Order';
import Register from './pages/Register';
import Sell from './pages/Sell';
// import Company from './pages/Company';
// import Mypage from './pages/Mypage';
// import Order from './pages/Order';
// import Register from './pages/Register';
// import Sell from './pages/Sell';
// import { useState } from 'react';

export default function App() {
  // // login 상태 초기 state 설정
  // // const [isLogin, setIsLogin] = useState(true); //로그인 상태

  // /* 로그인 한 상태의 header로 사용하고 싶은 경우 아래 주석 해제하고 사용해주세요. */
  // const [isLogin, setIsLogin] = useState(true); //로그인 안한 상태

  // // login 상태 변경하는 함수
  // const setLoginStatus = (status) => {
  //   setIsLogin(status);
  // }

  // <Route path="about" element={<Company/>}/> {/* 회사소개 */}
  // <Route path="mypage" element={<Mypage/>}/> {/* 마이페이지 */}
  // <Route path="order" element={<Order/>}/> {/* 주문 */}
  // <Route path="register" element={<Register/>}/> {/* 회원가입 */}
  // <Route path="sell" element={<Sell/>}/> {/* 판매신청 */}
  return (

    <>      
      <BrowserRouter>
        <Routes>
            <Route path='login' element={<Login/>}/>
            <Route path='easyLogin' element={<EasyLogin/>}/>
            <Route path='phoneLogin' element={<PhoneLogin/>}/>
            <Route path='findId' element={<FindId/>}/>
            <Route path='findPwd' element={<FindPwd/>}/>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>s
            <Route path="main" element={<Main/>}/> {/* 메인 */}           
            <Route path="search" element={<Search/>}/> {/* 검색 */}
            <Route path="about" element={<About/>}/> {/* 회사소개 */}
            <Route path="detail" element={<Detail/>}/> {/* 상세페이지 */}
            <Route path="mypage" element={<Mypage props={'ArtWorkList'}/>}/> {/* 마이페이지 */}
            <Route path="order" element={<Order/>}/> {/* 주문 */}
            <Route path="register" element={<Register/>}/> {/* 회원가입 */}
            <Route path="sell" element={<Sell/>}/> {/* 판매신청 */}
            <Route path="about" element={<About/>}/> 
          </Route> 
          
          {/* <Route path="/login" element={<LayoutLogin/>}> */}
            {/* <Route index element={<Login currentLoginStatus={setLoginStatus}/>}/> 로그인 */}
          {/* </Route>                   */}
        </Routes>
      </BrowserRouter> 
      <GlobalStyle/>  
    </>    
  );
}