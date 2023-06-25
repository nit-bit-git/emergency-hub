import React from 'react';
import Sidebar from "../SideBar";
import Navbar from "../Navbar/navbar"
import boLogo from "../styles/assets/logo.svg";
import Rise from "../styles/assets/Rise.svg";
import "../styles/home.css";
const Form= () => {

  return (
    <div style={{ minHeight: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' , padding: '2%'}}>
      <h1 style={{ fontSize: '3rem' }}>Volunteer Registration</h1>
      <form style={{ maxWidth: '400px', width: '100%' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
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
          <label htmlFor="email" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
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
          <label htmlFor="email" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Phone Number:</label>
          <input
            type="email"
            id="email"
            name="email"
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
          <label htmlFor="option" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Availability:</label>
          <select
            id="option"
            name="option"
            style={{
              padding: '0.5rem',
              borderRadius: '0.25rem',
              border: '1px solid #ccc',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
              width: '100%',
            }}
            required
          >
            <option value="">Select an option</option>
            <option value="Option 1">Weekdays (Monday to Friday)</option>
            <option value="Option 2">Weekends (Saturday and Sunday)</option>
            <option value="Option 3">Both weekdays and weekends</option>
            <option value="Option 4">Not available</option>
          </select>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="option" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Prior Experience:</label>
          <select
            id="option"
            name="option"
            style={{
              padding: '0.5rem',
              borderRadius: '0.25rem',
              border: '1px solid #ccc',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
              width: '100%',
            }}
            required
          >
            <option value="">Select an option</option>
            <option value="Option 1">Yes</option>
            <option value="Option 2">No</option>
          </select>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Availability in terms of Hours per Week/Month:</label>
          <input
            type="email"
            id="email"
            name="email"
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
          <label htmlFor="option" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Any Physical Limitations:</label>
          <select
            id="option"
            name="option"
            style={{
              padding: '0.5rem',
              borderRadius: '0.25rem',
              border: '1px solid #ccc',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
              width: '100%',
            }}
            required
          >
            <option value="">Select an option</option>
            <option value="Option 1">Yes</option>
            <option value="Option 2">No</option>
          </select>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Blood Group:</label>
          <input
            type="email"
            id="email"
            name="email"
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
          <label htmlFor="message" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Additional Comments/Questions:</label>
          <textarea
            id="message"
            name="message"
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
        <div style={{ display: 'flex', justifyContent:'center',  alignItems: 'center'}}>
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

  function FormPage() {
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
          <Form />
          </div>
          </div>
         
       
         
  
          
       
      </div>
    );
  }

export default FormPage;
