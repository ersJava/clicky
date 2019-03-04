import React, { Component } from 'react';
import './App.css';
import Images from './Images';

class App extends Component {
  render() {
    return (
      <div>
        <container>
          <h3>Clicky Game</h3><h3>Score</h3>
          <h2>Clicky Game!</h2>
          <h4>Click on an image to earn points, but don't click on any more than once!</h4>
          </container>
          <Images />
      </div>
    );
  }
}

export default App;
