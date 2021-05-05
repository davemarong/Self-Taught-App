import { useState, useEffect } from "react";
import NavItems from "./NavItems";
import React from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import "../../styles/Navbar.css";
import { IconContext } from "react-icons";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Nav() {
  const [sidebar, setSidebar] = useState(false);
  const handleShowSidebar = () => {
    setSidebar(!sidebar);
  };
  const matches = useMediaQuery("(min-width:1224px)");
  useEffect(() => {
    setSidebar(true);
  }, [matches]);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <TiThMenu onClick={handleShowSidebar} />
            </Link>
            <h2 className="navbar-logo">Self taught</h2>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul
              className="nav-menu-items"
              onClick={() => {
                if (!matches) {
                  handleShowSidebar();
                }
              }}
            >
              <li className="navbar-toggle">
                {matches ? null : (
                  <Link to="#" className="menu-bars close">
                    <AiOutlineClose />
                  </Link>
                )}
              </li>

              <h1 className="nav-logo">Self taught</h1>
              <hr className="nav-hr" />
              {NavItems.map((item) => (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}
