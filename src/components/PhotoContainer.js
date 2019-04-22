import React from 'react';


//components
import Photo from './Photo';
import NotFound from './NotFound'

const PhotoContainer = props => {
  let results = props.data;
  let photos;
  //check for results and if so map the photos array into a list of individual photos
  if (results.length > 0) {
    photos = results.map( photo => <Photo key={photo.id} url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}/>);} else {
    photos = <NotFound />
    };

// render "Loading" if loading, otherwise render photos array
    return(
          <div className="photo-container">
            <h2>{(props.loading) ? "Loading..." : ""}</h2>
            <ul>
              {photos}
            </ul>
          </div>
      
    );
  };

export default PhotoContainer;