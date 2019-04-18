import React from 'react';


//components

import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';


const SearchContainer = (props) => {
    return(
        <div>
            <SearchForm onSubmit={props.onSubmit} />
            <PhotoContainer data={props.data} loading={props.loading} />
        </div>
    );
}

export default SearchContainer;