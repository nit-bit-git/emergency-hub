import React, { useState, useEffect } from 'react';
import './newsfeed.css';
import bhuj from '../styles/assets/data/bhuj.svg';
import {  useNavigate } from 'react-router-dom';
const Newsfeed = () =>
{
    
        const [newsData, setNewsData] = useState([]);
      
        useEffect(() => {
          // Fetch news data from the backend API
          const fetchData = async () => {
            try {
              //const response = await axios.get("your-backend-api-url");
             // setNewsData(response.data); // Assuming response.data contains an array of news objects
            } catch (error) {
              console.log("Error fetching news data:", error);
            }
          };
      
          fetchData();
        }, []); 
        const navigate = useNavigate();

        const handleClick = () => {
            navigate('./desc')
            // Perform additional actions or update component state here
          };


    return (
        <div>
           
    {/*<h2>News Feed</h2> 
        {newsData.map((newsItem) => (
        <div key={newsItem.id}>
            <h3>{newsItem.title}</h3>
            <p>{newsItem.content}</p>
          </div>
        ))}*/}
        <div className='feed'>
        <div className='news' onClick={handleClick}>
            <img src={bhuj} alt='bhuj-earthquake'></img>
            <div className='content'>
         <h1>Catastrophic Earthquake Strikes Bhuj</h1>
            <p>Immediate assistance needed</p>
            </div>
          </div>
          <div className='news' onClick={handleClick}>
            <img src={bhuj} alt='bhuj-earthquake'></img>
            <div className='content'>
         <h1>Catastrophic Earthquake Strikes Bhuj</h1>
            <p>Immediate assistance needed</p>
            </div>
          </div>
          <div className='news' onClick={handleClick}>
            <img src={bhuj} alt='bhuj-earthquake'></img>
            <div className='content' >
         <h1>Catastrophic Earthquake Strikes Bhuj</h1>
            <p>Immediate assistance needed</p>
            </div>
          </div>
          </div>
      </div>
    );
  }
       
export default Newsfeed;