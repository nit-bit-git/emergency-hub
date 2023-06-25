import React from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";
import "../styles/home.css";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../SideBar";
import Navbar from "../Navbar/navbar"
import boLogo from "../styles/assets/logo.svg";
import Rise from "../styles/assets/Rise.svg"

const Report= () => {
    const navigate = useNavigate();
  return (
    <div style={{ minHeight: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
      <div style={{ marginBottom: '2rem', marginLeft: '-14rem' }}>
        <h1 style={{ fontSize: '3rem', margin: '0', padding: '0' }}>Volunteer</h1>
        <h1 style={{ fontSize: '3rem', margin: '0', padding: '0' }}>Verification.</h1>
      </div>
      <form style={{ maxWidth: '400px', width: '100%' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Id:</label>
          <input
            type="text"
            id="volid"
            name="volid"
            style={{
              padding: '0.5rem',
              borderRadius: '0.25rem',
              border: '1px solid #ccc',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
              width: '100%',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Name:</label>
          <input
            type="text"
            id="Volname"
            name="Volname"
            style={{
              padding: '0.5rem',
              borderRadius: '0.25rem',
              border: '1px solid #ccc',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
              width: '100%',
            }}
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '0.25rem',
              backgroundColor: 'black',
              color: 'white',
              border: 'none',
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default function RepHome() {
  return (

    
    <body style={{height:'100vh'}} >
    <div className="hcontainer" style={{height:'110vh'}} >
      
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
        <div  >
        <Report />
        </div>
        </div>

     
    </div>
    <div className='foot'>
          <h1 style={{color:'black'}}>
             <u>footer</u>
            </h1>
        </div> 
    </body>
  );
}