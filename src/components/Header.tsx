import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Header:FC = () => {
  return (
    <div className="app-header">
      <div className="app-title">
        chihiroがハマってきたものたち
      </div>
      <div className="app-memu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/game">Game</Link></li>
          <li><Link to="/comic">Comic</Link></li>
        </ul>
      </div>
      
    </div>
  );
}


export default Header;