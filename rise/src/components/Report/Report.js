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
        <h1 style={{ fontSize: '3rem', margin: '0', padding: '0' }}>Create a</h1>
        <h1 style={{ fontSize: '3rem', margin: '0', padding: '0' }}>Report.</h1>
      </div>
      <form style={{ maxWidth: '400px', width: '100%' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Disaster Type:</label>
          <input
            type="text"
            id="Dtype"
            name="Dtype"
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
          <label htmlFor="email" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Heading:</label>
          <input
            type="text"
            id="heading"
            name="heading"
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
          <label htmlFor="message" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Description:</label>
          <textarea
            id="Desc"
            name="Desc"
            style={{
              padding: '0.5rem',
              borderRadius: '0.25rem',
              border: '1px solid #ccc',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
              width: '100%',
              resize: 'vertical',
              minHeight: '100px',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="image" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Image (Optional):</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              style={{
                display: 'none',
              }}
            />
            <label
              htmlFor="image"
              style={{
                padding: '0.5rem 1.43rem',
                borderRadius: '0.25rem',
                backgroundColor: 'black',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Choose Image
            </label>
          </div>
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

    
    <div className="hcontainer">
      
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
        <Report />
        </div>
        </div>
       
     
       

        
     
    </div>
  );
}
