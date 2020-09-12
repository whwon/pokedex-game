import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <React.Fragment>
      <div className="topnav">
        <div>
          <img alt="" src="../images/pokeball.jpg" />
          <Link to="/">
            <li className="current" href="#home">
              Who's That PokeMon
            </li>
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <li>Contact</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
export default NavBar;
