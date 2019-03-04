import React, { Component } from 'react';
import Images from './Components/Images';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero backgroundImage="https://backgroundcheckall.com/wp-content/uploads/2017/12/sailor-moon-background-tumblr-7.jpg">
          <h1>Clicky Game</h1>
          <h3>Click on an image to earn points but don't click on the same image twice</h3>
        </Hero>
        <Images />
          
  
          </div>
     
    );
  }
}

export default App;
