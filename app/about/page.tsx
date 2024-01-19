import React from 'react'
import Header from '../Header'
import Breadcrum from '../Breadcrum'
import AboutContent from './About'
import Footer from '../Footer'

const About = () => {
  return (
  
    <main className="main">
      {/* <h1>{name}</h1> */}
     <Header/> 
     <Breadcrum/> 
     <AboutContent/>
     <Footer/>
    </main>
    
   
    
    
  )
}

export default About