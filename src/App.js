import {BrowserRouter, Route, Routes} from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Main from './pages/Main'
import About from './pages/About'
import Layout from './layouts/Layout';

function App() {
  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="about" element={<About/>}/>            
          </Route> 
        </Routes>
      </BrowserRouter> 
      <GlobalStyle/>  
    </>    
  );
}

export default App;
