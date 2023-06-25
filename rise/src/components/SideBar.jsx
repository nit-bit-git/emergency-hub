import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSettings, FiUsers, FiAlertOctagon, FiMenu } from 'react-icons/fi';

function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    setIsOpen(!isOpen);
    // Perform specific actions based on the clicked item
    console.log(`Clicked ${item}`);
  };

  return (
    <div className="side-navbar">
      <ul>
        <li onClick={() => navigate('/Newsfeed/newsfeed')}>
          <FiSettings />
          Newsfeed
        </li>
        <li onClick={() => navigate('/Report/Report')}>
          <FiUsers />
          Report
        </li>
        <li onClick={() => navigate('/volunteering/form')}>
          <FiAlertOctagon />
          Volunteering
        </li>
      </ul>
    </div>
  );
}

export default Nav;
