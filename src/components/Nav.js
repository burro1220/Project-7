import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink exact onClick={props.reset} to="/">Home</NavLink></li>
                <li><NavLink to="/jordan">Jordan</NavLink></li>
                <li><NavLink to="/tiger">Woods</NavLink></li>
                <li><NavLink to="/brady">Brady</NavLink></li>                
            </ul>
      </nav>
    );
}

export default Nav;