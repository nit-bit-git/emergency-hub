import Block from './styles/assets/block.svg';
import Topus from './styles/assets/topus.svg';
import Logo from './styles/assets/logo.svg'
import './styles/Splash.css'
import Landing from './landing';

import { color, easeInOut, motion } from "framer-motion";
import React, { useState, useEffect } from 'react';

import {  useNavigate } from 'react-router-dom';






function Splash()
{ 
  
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const navigate = useNavigate();

  
  

useEffect(() => {
  const interval = setInterval(() => {
    
    setIsVisible2(((prevVisible2) => !prevVisible2));
  }, 500)
  return () => clearInterval(interval);
}, []);
useEffect(() => {
  const interval = setInterval(() => {
    
    setIsVisible3((prevVisible3) => !prevVisible3);
  }, 600)
  return () => clearInterval(interval);
}, []);  

useEffect(() => {
  const delay = 2000; // 2 seconds
  
  const timeout = setTimeout(() => {
   navigate('./landing');// Replace '/new-screen' with the desired URL path
  }, delay);
  return () => {
    clearTimeout(timeout); // Clear the Interval if the component is unmounted before the delay completes
  };
}, [navigate]);
    return (
       
       <body>
          <div className='bg'>
         <div className={`wordentry `}>
         {isVisible2 && < img src={Logo} className='bologo' alt='logo'></img>}
         {  <img src={Block} className='block' alt='block'></img> }
           
         {isVisible3 && <img src={Topus} className='topus' alt='topus'></img> }
          
           </div>
         </div>
         </body>
        
    )
} 
export default Splash;