import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Search from './pages/Search';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Login from './pages/Login';
import LayoutLogin from './layouts/LayoutLogin';
import { useState } from 'react';

export default function App() {  
  const [isLogin, setIsLogin] = useState(false);

  const setLoginStatus = (status) => {
    console.log('current Login Status from Login : ' + status);
    setIsLogin(status);
  }
  console.log('loginStatus from App.js : ' + isLogin);

  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout currentLoginStatus={{isLogin, setLoginStatus}}/>}>
            <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>}/>            
            <Route path="search" element={<Search/>}/>
          </Route> 
          <Route path="/login" element={<LayoutLogin/>}>
            <Route index element={<Login currentLoginStatus={setLoginStatus}/>}/>
          </Route>         
        </Routes>
      </BrowserRouter> 
      <GlobalStyle/>  
    </>    
  );
}

