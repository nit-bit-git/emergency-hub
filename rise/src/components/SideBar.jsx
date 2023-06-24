import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { links } from "./SideBarData";
import Logo from "./styles/assets/logo.svg";
import './styles/SideBar.css';

export default function Sidebar() {
  const [activeBar, setActiveBar] = useState(false);

  return (
    <aside className={`sidebar ${activeBar && "active"}`}>
      <header className="header">
       
        <button
          className="toggle-sidebar-btn"
          onClick={() => setActiveBar(!activeBar)}
        >
          <FiMenu />
        </button>
      </header>

      <ul className="list-items">
        {links.map(({ title, icon, link }, index) => (
          <li key={index} className="item">
            <a className="link" href={link}>
              <figure className="link-icon">{icon}</figure>
              <span className="link-name">{title}</span>
            </a>
            <span className="tooltip">{title}</span>
          </li>
        ))}
      </ul>

      <button className="logout-btn">
        
        <div className="user-name-wrapper">
          <span className="user-name">Blocktopus</span>
          <BiLogOut />
        </div>
      </button>
    </aside>
  );
}
