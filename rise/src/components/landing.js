import Block from './styles/assets/block.svg';
import Topus from './styles/assets/topus.svg'
import Logo from './styles/assets/logo.svg'
import Octo from './styles/assets/Blocktopus.svg'
import './styles/landing.css';
import React, { useState, useEffect, useRef } from 'react';
import { easeInOut, motion } from "framer-motion";

import design from './styles/assets/design.svg'
import Rise from './styles/assets/Rise.svg'
import Navbar from './Navbar/navbar'
import Resilience from './styles/assets/resilience.svg'
import Innovation from './styles/assets/Innovation.svg';
import Diamond from './styles/assets/diamond.svg';
import Support from './styles/assets/support for emergencies.svg'
const TranslatedDiv = () => {
  return (
    <motion.div
      initial={{x:"0%",y:"90%"}}
      animate={{ x:"-20%", y:"-35%", scale:0.4 }} // Target position
      transition={{ duration: 1 }} // Transition duration
      style={{
        display: 'flex',
        position: 'relative',
        height: 'min-content',
        width:'100%',
  zIndex: '4',
        transform: 'scale(1)', // Initial scale value
      }}
    >
      <div className={`wordentry `}>
          { < img src={Logo} className='bologo' alt='logo'></img>}
         
          <img src={Block} className='Block' alt='block'></img>
            {  <img src={Topus} className='topus' alt='topus'></img> }
            </div>
    </motion.div>
  );
};


function Landing()
{ 
  const [isVisibleOc, setIsVisibleOc] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisibleOc(true);
      }, 2000)
      return () => clearTimeout(timer);
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const delay = setTimeout(() => {
      
      setIsVisible(((previsVisible2) => !previsVisible2));
    }, 700)
    return () => clearTimeout(delay);
  }, []);

  const aboutUsSectionRef = useRef(null);

    return (
      <body style={{backgroundColor:'black'}}>
      <body className='body'>
       
        <div className='outC'>
        
          <div className='container'>
          
          <TranslatedDiv />
          
          <div className={`navbox ${isVisible ? 'visible' : ''}`} >
           <Navbar aboutUsSectionId='aboutus' />
           </div>
           <div className={`bgk ${isVisible ? 'visible' : ''}`}>
            <div style={{ position: 'relative', top: '10%' }}>
           <div className='riseCon'>
            <img src={Rise} alt='rise'></img>
           </div>
           < div className='tagline'>
           <img src={Resilience}/>
           <img src={Diamond}/>
           <img src={Innovation}/>
           <img src={Diamond}/>
           <img src={Support}/>
           </div>
          </div>
         
          </div>
         
          </div>
          </div> 
          <div className={`D1 ${isVisible ? 'visible' : ''}` }>
          <div className='vortex'>
          <motion.div
          initial={{ x: 0, y: -100 }} // Initial position (optional)
          animate={{ 
           y: [80,-80,70]
          }} // Animation position
          transition={{ duration: 5, delay: 2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse' }}
        style={{
          height:'max-content',
          
        }} // Animation duration
        >
          { isVisibleOc && < img src ={Octo} className="Octo" alt="Octo"></img>}
        </motion.div>
            </div>
            <div id='aboutus' ref={aboutUsSectionRef} className='aboutus'>
            <h1>
              About Us
            </h1>
            
            <p>
              We at Blocktopus aim at ...
            </p>
            </div>
           </div>
          <div className={`D2 ${isVisible ? 'visible' : ''}`} />
          </body>     
          <div className='footer'>
          <h1>
             <u>Meet the Team</u>
            </h1>
        </div> 
        </body>
    )
} 
export default Landing;