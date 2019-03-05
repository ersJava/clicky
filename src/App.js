import React, { Component } from 'react';
import Image from './Components/Images';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import IMAGES from './data/images';

class App extends Component {

  state = {
    images: IMAGES,
  }

  renderImages = () => (
    <div>
      <div>
        {
          IMAGES.map(IMAGE => (
            <Image key={IMAGE.id} image={IMAGE} click={this.handlesOnClick} />
          ))
        }
      </div>
    </div>
  )

 handlesOnClick = (id) => {
  console.log(id)  
  this.setState({
    images: this.shuffle(IMAGES)
    // loop over all objects state 
    // (for in loop)
    // finding matching id and set to click
    // check if it's been clicked
    // if yes, then end if not continue
    // set to true 
   
})
 }


shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
  
  render() {
    return (
      <div>
        <Header />
        <Hero backgroundImage="https://backgroundcheckall.com/wp-content/uploads/2017/12/sailor-moon-background-tumblr-7.jpg">
          <h1>Clicky Game</h1>
          <h3>Click on an image to earn points but don't click on the same image twice</h3>
        </Hero>
     
          {this.renderImages()}
  
          </div>
     
    );
  }
}

export default App;
