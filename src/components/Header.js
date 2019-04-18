import React from 'react';

//components
import Nav from './Nav';


const Header = (props) => {
    return(
        <div className="header">
            <h1>React Photo App</h1>            
            <Nav reset={props.reset} />
        </div>
    );
}

export default Header;
