import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/home.css";
import React, { useState, useEffect } from 'react';
import Newsfeed from "./Newsfeed/newsfeed";
import Sidebar from "./SideBar";
import Navbar from "./Navbar/navbar"
import boLogo from "./styles/assets/logo.svg";
import Rise from "./styles/assets/Rise.svg"
export default function Home() {
  return (

    <body>
    <div className="hcontainer" style={{overflow:"hidden"}}>
      
       <div className="hHeader">
        <div className="boLogo">
          <img src={boLogo}></img>
        </div>
        <div className="Rise">
          <img src={Rise}></img>
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
       
       
    </div>
    <div className='foot' style={{position:'absolute'}}>
          <h1 style={{color:'black'}}>
             <u>footer</u>
            </h1>
        </div> 
    </body>
  );
}