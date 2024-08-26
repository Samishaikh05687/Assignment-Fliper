import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";

import AboutUs from './pages/About/AboutUs';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import WhyChooseUs from './pages/WhyChoose/WhyChooseUs';
import OurProjects from './pages/Projects/OurProjects';
import HappyClients from './pages/Customer/HappyClients';
import Footer from './pages/Inquiry/Footer';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutUs/>} />
       <Route path='/whychoose' element={<WhyChooseUs/>} />
      <Route path='/customer' element={<HappyClients/>} /> 
      <Route path='/services' element={<OurProjects/>} /> 
      <Route path='/inquiry' element={<Footer/>} /> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App