import React from 'react';


//components
import Photo from './Photo';
import NotFound from './NotFound'

const PhotoContainer = props => {
  
  //<NotFound /> is rendering every time so results must be 0 -- I understand results is 0 on initial load
  //but once state is set in App.js on line 44 shouldn't that trigger a re-render of everything down the tree
  //and then populate my results, then re-render {photos}...??

  let results = props.data;
  let photos;
  if (results.length > 0) {
    photos = results.map( photo => <Photo />)
  } else {
    photos = <NotFound />
  }
    return(
        
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {photos}
        </ul>
      </div>
    );
  };

export default PhotoContainer;