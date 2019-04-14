import React from 'react';


//components
import Photo from './Photo';
const PhotoContainer = props => {

    
    return(
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
          <Photo />
        </ul>
      </div>
    );
}

export default PhotoContainer;