import React from 'react';
import { IoFastFoodOutline } from 'react-icons/io5';
import { FaTshirt, FaUser } from 'react-icons/fa';
import Sidebar from "../SideBar";
import Navbar from "../Navbar/navbar"
import boLogo from "../styles/assets/logo.svg";
import Rise from "../styles/assets/Rise.svg";
import "../styles/home.css";

const NewsPage= () => {
  const description =
    "News Description...... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget risus dui. Integer et elit leo. Nam pharetra eleifend tortor ac bibendum. Sed at commodo lectus. Fusce euismod mauris mauris, vel scelerisque sem laoreet non. Nulla facilisi. Suspendisse vulputate mauris eu nibh commodo, non viverra mauris tempus. Maecenas ut felis lorem. Duis a gravida risus. Vestibulum in consectetur nulla, nec interdum sem. Fusce sodales felis mauris, et efficitur justo semper vel. Quisque aliquet purus eu sem fermentum, et pulvinar tellus pharetra. Aliquam eu nisl nisi. Integer nec quam tellus. Proin lobortis congue feugiat.";

  const categories = [
    { name: "Food", icon: <IoFastFoodOutline />, count: 10 },
    { name: "Clothes", icon: <FaTshirt />, count: 5 },
    { name: "Volunteers", icon: <FaUser />, count: 3 },
  ];

  return (
    <div
      style={{
        minHeight: 'fit-contentt',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <header>
        <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>NEWS TITLE HERE.</h1>
        <p style={{ fontSize: '2rem' ,padding: '3%'}}>{description}</p>
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {categories.map((category) => (
              <div key={category.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {category.icon}
                <p style={{ marginTop: '0.5rem' }}>
                  {category.name} ({category.count})
                </p>
              </div>
            ))}
          </div>
          <div style={{ width: '3px', height: '200px', backgroundColor: '#000000', margin: '0 5rem' }}></div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Fund:</p>
            <input
              type="text"
              style={{
                padding: '0.5rem',
                marginBottom: '0.5rem',
                borderRadius: '0.25rem',
                border: '1px solid #ccc',
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
                width: '200px',
              }}
              placeholder="Enter amount"
            />
              <button
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
                Donate
              </button>
          </div>
        </div>
      </header>
    </div>
  );
}
function Desc() {
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
        <NewsPage />
        </div>
        </div>
       
     
       

        
     
    </div>
  );
}
export default Desc;
