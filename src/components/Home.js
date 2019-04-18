import React from 'react';

import SearchForm from './SearchForm'

const Home = props => {
    return(
        <div>
            <h2>Welcome to my Show</h2>
            <p>Let me amaze you with my coding skills by delivering this amazing app across time and screen size.</p>
            <p>Search for the images of your choice nad be amazed...</p>
            <SearchForm onSubmit={props.onSubmit} />
        </div>
    );
}

export default Home;