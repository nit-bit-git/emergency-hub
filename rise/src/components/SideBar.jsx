import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSettings, FiUsers, FiAlertOctagon } from 'react-icons/fi';
import { GoVerified } from 'react-icons/go';
import "./SideBar.css";

function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setIsOpen(!isOpen);
    setActiveItem(item);
    console.log(`Clicked ${item}`);
  };

  const handleMouseMove = (item) => {
    if (item !== activeItem) {
      setActiveItem(item);
    }
  };

  return (
    <div className="side-navbar">
      <ul className="sidebar-list">
        <li
          className={activeItem === 'Newsfeed' ? 'active' : ''}
          onMouseMove={() => handleMouseMove('Newsfeed')}
          onClick={() => navigate('/home')}
        >
          <FiSettings />
          Newsfeed
        </li>
        <br/>
        <li
          className={activeItem === 'Report' ? 'active' : ''}
          onMouseMove={() => handleMouseMove('Report')}
          onClick={() => navigate('/Report/Report')}
        >
          <FiUsers />
          Report
        </li>
        <br/>
        <li
          className={activeItem === 'Volunteering' ? 'active' : ''}
          onMouseMove={() => handleMouseMove('Volunteering')}
          onClick={() => navigate('/volunteering/form')}
        >
          <FiAlertOctagon />
          Volunteering
        </li>
        <br/>
        <li
          className={activeItem === 'VolunteerVerification' ? 'active' : ''}
          onMouseMove={() => handleMouseMove('VolunteerVerification')}
          onClick={() => navigate('/volunteering/formVer')}
        >
          <GoVerified />
          Volunteer Verification
        </li>
      </ul>
    </div>
  );
}

export default Nav;