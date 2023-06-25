import React from 'react';
import {
  FiSettings,
  FiUsers,
  FiAlertOctagon,
  FiMenu
} from "react-icons/fi";
const handleItemClick = (item) => {
  setIsOpen(!isOpen);
};


class SideNavbar extends React.Component {
  render() {
    return (
      <div className="side-navbar">
        
        <ul>
          <div>
          <li onClick={() => handleItemClick('MenuItem1')}>Newsfeed</li>
          </div>
          <li onClick={() => handleItemClick('MenuItem1')}>Report</li>
          <li onClick={() => handleItemClick('MenuItem1')}>Volunteering</li>
        </ul>
      </div>
    );
  }
}

export default SideNavbar;
