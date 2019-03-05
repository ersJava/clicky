import React from 'react';

const Image = props => {
    const { image, click } = props;
    return(
        <div style={{ display: 'inline-block', width: 300, padding: 10}} onClick={() => click(image.id)}>
        <img src={image.image} alt='sailor moon character' style={{ width: 200, height: 150,}} />
        </div>
    ) 
}

 export default Image;