import React from 'react';
import "./styles.css";

function Header() {
  return (
    <div class="row">
    <div class="col">
      Clicky Game
    </div>
    <div class="col">
    You Guessed<div id="guess"></div>
    </div>
    <div class="col">
      Score: | Top Score:
    </div>
  </div>
  );
}


export default Header;