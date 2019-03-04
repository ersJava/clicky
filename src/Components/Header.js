import React from 'react';

const Header = ({ children }) => {
  const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30
  };

  return (
    <div>
      <div>
      <h3 style={style}>Clicky Game</h3>
      <h3 style={style}>You guessed</h3>
      <h3 style={style}>Score</h3>
      </div>
      {children}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
      Clicky Game
   <div>
     <ul className="navbar-nav">
       <li className="nav-item">
           You guessed
       </li>
       <li className="nav-item">
           Score
       </li>
   
     </ul>
   </div>
 </nav>
    </div>
  )
}


  

export default Header;