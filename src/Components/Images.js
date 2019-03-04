import React, { Component } from 'react';
import IMAGES from '../data/images';

const Image = props => {
    const { image } = props.image;
    return(
        <div style={{ display: 'inline-block', width: 300, padding: 10}}>
        <img src={image} alt='sailor moon character' style={{ width: 200, height: 150,}} />
        </div>
    ) 
}

const Images = () => (
    <div>
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