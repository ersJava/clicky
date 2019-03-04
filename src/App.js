import React, { Component } from 'react';
import './App.css';
import Images from './Components/Images';
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <container>
          <h2>Clicky Game!</h2>
          <p>Click on an image to earn points, but don't click on any more than once!</p>
          </container>
          <Images />
      </div>
    );
  }
}

export default App;
