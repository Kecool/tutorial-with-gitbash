import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import AneSection from '../components/AneSection';
import { 
  homeObjOne, 
  homeObjTwo, 
  homeObjThree,



} from '../components/AneSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => { 
        setIsOpen(!isOpen)
    }


  return (
  <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <HeroSection /> 
    <AneSection {...homeObjOne} />
    <AneSection {...homeObjTwo} />
    <Services />
    <AneSection {...homeObjThree} />
    <Footer />
    
    
    
  </>
  )
}

export default Home;