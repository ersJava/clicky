import React from 'react';

const styles = {
  container: {
    padding: "40px"
  },
  h2: {
    color: "pink"

  }

}


function Header() {
  return (
    <div style={styles.container}>
    <div class="row">
    <div class="col">
      <h2 style={styles.h2}>Clicky Game</h2>
    </div>
    <div class="col">
    You Guessed<div id="guess"></div>
    </div>
    <div class="col">
      Score: | Top Score:
    </div>
  </div>
  </div>
  );
}


export default Header;