import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { ConnectWallet } from "@thirdweb-dev/react";


  

const Navbar = ({ aboutUsSectionId }) => {
  const handleAboutUsClick = (event) => {
    event.preventDefault();
    const aboutUsSection = document.getElementById(aboutUsSectionId);
    aboutUsSection.scrollIntoView({ behavior: 'smooth' });
  };
const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const delay = setTimeout(() => {
      
      setIsVisible(((prevVisible2) => !prevVisible2));
    }, 1000)
    return () => clearTimeout(delay);}, []);

        return (
      <div style={{display:'flex',alignItems:'center'}}>
      {isVisible && (
        <nav className={`navContainer ${isVisible ? 'visible' : ''}`}>
         
       
            
  <ul>
    <li><a href='../home'>Home</a></li>
    <li><a href={`#${aboutUsSectionId}`}onClick={handleAboutUsClick}>About</a></li>
    <li><a href="#">Services</a></li>
    <div className="btncontainer">
          <ConnectWallet  className='custom-button' dropdownPosition={{ side: 'bottom', align: 'center'}}/>
        </div>
  </ul>
 
</nav> )} 
</div>
       
    );
}
export default Navbar;