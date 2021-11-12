import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className='topnav'>
          
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/about"
                >
                    ABOUT COMPANY
                </NavLink>
                {/* </div>
                <div className='col-3'> */}
                
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/team"
                >
                    MEET OUR TEAM
                </NavLink>

                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/contact"
                >
                    CONTACT US
                </NavLink>

                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/privacy"
                >
                    PRIVACY
                </NavLink>
            
        </div>
    );
}

export default Navbar;