import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/home.css";
import React, { useState, useEffect } from 'react';
import Newsfeed from "./Newsfeed/newsfeed";
import Sidebar from "./SideBar";
import Navbar from "./Navbar/navbar"
import boLogo from "./styles/assets/logo.svg";
import Rise from "./styles/assets/Rise.svg"
import sBar from "./searchbar";
export default function Home() {
  return (

    
    <div className="hcontainer">
      
       <div className="hHeader">
        <div className="boLogo">
          <img src={boLogo}></img>
        </div>
        <div className="Rise">
          <img src={Rise}></img>
          <sBar/>
        </div>
       <div className="nBar">
        < Navbar />
       </div>
       </div>
       <div className="con2">
      
        
        <div className="sidebar">
        <Sidebar/>
        </div>
        <div className="Newsfeed">
        <Newsfeed />
        </div>
        </div>
        <div className="footer">
          <hi>footer</hi>
          </div> 
    </div>
   
  );
}
