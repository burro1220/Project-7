import React from 'react';

//components
import Nav from './Nav';

//props.reset is function to reset state.photos to empty array and thereby enable redirect to work
const Header = (props) => {
    return(
        <div className="header">
            <h1>React Photo App</h1>                        
            <Nav reset={props.reset} />
        </div>
    );
}

export default Header;
