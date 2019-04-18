import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/jordan">Jordan</NavLink></li>
                <li><NavLink to="/tiger">Woods</NavLink></li>
                <li><NavLink to="/brady">Brady</NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
            </ul>
      </nav>
    );
}

export default Nav;