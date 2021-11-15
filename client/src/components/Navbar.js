import React from "react";
// import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
// import SignIn from "./Sign/Sign-in";
// import About from "./About"
    
    
const display = {
    nav: {
        justifyContent: "space-between"
    },
    inline: {
        display: "flex"
    }
}

function Navbar() {
  return (
    <div className="topnav">
      {/* <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/about"
      >
        ABOUT COMPANY
      </NavLink>

      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/team"
      >
        MEET OUR TEAM
      </NavLink> */}

      <Nav variant="tabs" defaultActiveKey="/home" style={display.nav}>
        <Nav.Item>
          <Nav.Link href="./About"> About</Nav.Link>
        </Nav.Item>

        <div style={display.inline}>
          <Nav.Item>
            <Nav.Link href="./Sign/Sign-in/index." eventKey="link-1">
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="./Sign/Sign-up/index.js" eventKey="link-2">
              Sign-Up
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </div>
  );
}

export default Navbar;
