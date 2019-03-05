import React from 'react';

const styles = {
  container: {
    padding: "10px",
    color: "white",
    background: "rgb(224, 71, 173)"
  },
}


function Header() {
  return (
    <div style={styles.container}>
    <div class="row">
    <div class="col">
      <h2>Clicky Game</h2>
    </div>
    <div class="col">
    <h2>You Guessed: <div id="guess"></div></h2>
    </div>
    <div class="col">
     <h2>Score:<div id="current-scoer"></div>Top Score:<div id="top-score"></div></h2>
    </div>
  </div>
  </div>
  );
}


export default Header;