import { useState } from "react";

import { Link } from "react-router-dom";

import { FcMenu } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

import { SidebarData } from "./SidebarData";

import { Navbar, TopNavbar } from "./style";

export function MenuLateral() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  console.log(sidebar);

  //function handleActiveMenuNavbar(event) {
    
  //}

  return (
    <>
      <TopNavbar className="top-menu-navbar">
        <button className="button-menu">
          <FcMenu size="2rem" onClick={showSidebar} />
        </button>
      </TopNavbar>
      <Navbar className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <button className="btn-close-navbar">
            <IoClose
              className="icon-close-navbar"
              size="2rem"
              onClick={showSidebar}
            />
            <span>Minha conta</span>
          </button>

          {SidebarData.map((sidebar, index) => {
            return (
              <li key={index} className={sidebar.cName}>
                <Link
                  to={sidebar.path}
                  //onClick={() => handleActiveMenuNavbar}
                  className="menu-bars"
                >
                  <span className="options-menu-navbar">{sidebar.icon}</span>
                  <span className="options-menu-navbar text-navbar">
                    {sidebar.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Navbar>
    </>
  );
}
