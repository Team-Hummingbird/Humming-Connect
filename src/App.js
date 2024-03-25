import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Layout from './layouts/Layout';
import Error from './pages/Error';
import Main from './pages/Main';

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="Main" element={<Main/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
