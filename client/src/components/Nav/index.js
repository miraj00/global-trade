import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/index.js"

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (

    

        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
      
      <ul className="flex-row">
        
            <Link to="/signup">
            <div className="style5">       Signup    </div>
            </Link>
         
      
         
            <Link to="/login">
            <div className="style6">      Login     </div>
            </Link>
         
      </ul>
      
      );
    }
  }

  return (
    <header className="flex-row px-1">
      
      <SideBar />

      <h1>


        <Link to="/">
          
         <div className="style4">  Global Trade  </div>
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
