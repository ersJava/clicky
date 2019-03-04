import React, { Component } from 'react';
import IMAGES from './data/images';

const Image = props => {
    const { image } = props.image;
    return(
        <img src={image} alt='sailor moon character' style={{ width: 200, height: 120 }} />
    ) 
}

const Images = () => (
    <div>
      <h2>Buttons</h2>
      <div>
        {
          IMAGES.map(IMAGE => (
            <Image key={IMAGE.id} image={IMAGE} />
          ))
        }
      </div>
    </div>
  )

 export default Images;