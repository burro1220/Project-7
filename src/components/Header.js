import React from 'react';

//components
import Nav from './Nav';
import SearchForm from './SearchForm';

const Header = (props) => {
    return(
        <div className="header">
            <h1>Here's My Title, Beeatch!</h1>
            <SearchForm />
            <Nav />
        </div>
    );
}

export default Header;
