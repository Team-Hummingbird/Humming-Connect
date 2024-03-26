import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Search from './pages/Search';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Login from './pages/Login';
import Company from './pages/Company';
import Mypage from './pages/Mypage';
import Order from './pages/Order';
import Register from './pages/Register';
import Sell from './pages/sell/Sell';
import LayoutLogin from './layouts/LayoutLogin';
import { useState } from 'react';

export default function App() {
  // login 상태 초기 state 설정
  const [isLogin, setIsLogin] = useState(true); //로그인 안한 상태

  /* 로그인 한 상태의 header로 사용하고 싶은 경우 아래 주석 해제하고 사용해주세요. */
  // const [isLogin, setIsLogin] = useState(true); //로그인 안한 상태

  // login 상태 변경하는 함수
  const setLoginStatus = (status) => {
    setIsLogin(status);
  }

  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout currentLoginStatus={{isLogin, setLoginStatus}}/>}>
            <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>}/> {/* 메인 */}           
            <Route path="search" element={<Search/>}/> {/* 검색 */}
            <Route path="about" element={<Company/>}/> {/* 회사소개 */}
            <Route path="mypage" element={<Mypage/>}/> {/* 마이페이지 */}
            <Route path="order" element={<Order/>}/> {/* 주문 */}
            <Route path="register" element={<Register/>}/> {/* 회원가입 */}
            <Route path="sell" element={<Sell/>}/> {/* 판매신청 */}
          </Route> 
          <Route path="/login" element={<LayoutLogin/>}>
            <Route index element={<Login currentLoginStatus={setLoginStatus}/>}/> {/* 로그인 */}
          </Route>                  
        </Routes>
      </BrowserRouter> 
      <GlobalStyle/>  
    </>    
  );
}

