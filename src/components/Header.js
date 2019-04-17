import React from 'react';

//components
import Nav from './Nav';
import SearchForm from './SearchForm';

const Header = (props) => {
    return(
        <div className="header">
            <h1>React Photo App</h1>            
            <SearchForm onSubmit={props.onSubmit} loading={props.loading} />
            <Nav />
        </div>
    );
}

export default Header;
