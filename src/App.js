import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/login/Login';
import Layout from './layouts/Layout'
import GlobalStyle from './styles/GlobalStyles';
import EasyLogin from './pages/login/EasyLogin';
import PhoneLogin from './pages/login/PhoneLogin';
import FindId from './pages/login/FindId';
import FindPwd from './pages/login/FindPwd';

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="easyLogin" element={<EasyLogin/>}/>
            <Route path="phoneLogin" element={<PhoneLogin/>}/>
            <Route path='findId' element={<FindId/>}/>
            <Route path='findPwd' element={<FindPwd/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;