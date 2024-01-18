
import Image from 'next/image'
import Slider from './Slider'
import Header from "./Header";
import About from './About';
import Services from './Services';
import Footer from './Footer';
import React, { useState } from 'react';
export default function Home() {

  //const [name, setName] = useState(typeof window !== 'undefined' ? 'Peter' : 'Rick')
  
   
  // const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);
  // ​
  //   // This useEffect will only run once, during the first render
  //   React.useEffect(() => {
  //     // Updating a state causes a re-render
  //     setInitialRenderComplete(true);
  //   }, []);
    
  return (
    
    <main className="main">
      {/* <h1>{name}</h1> */}
     <Header/> 
     <Slider/> 
     <About/>
     <Services/>
     <Footer/>
    </main>
  )
}
