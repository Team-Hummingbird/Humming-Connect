

import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopBtn from '../components/TopBtn';

export default function Layout(){
  
  return(
    <>
      <TopBtn/>
      <Header/>      
      <Outlet/>
      <Footer/>
    </>
      );
      }