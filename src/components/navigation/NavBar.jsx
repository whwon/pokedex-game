import React from 'react';
import { Link } from 'react-router-dom';
import pokeball from '../../assets/image/pokeball.png';

const NavBar = ({toggleDrawer}) => (
  <div className="NavBar">
    <div className="NavBar_Logo">
      <Link className="NavBar_Home" to="/">
        <img alt="pokeball" src={pokeball} />
        <div className="NavBar_Title">Who's That PokeMon</div>
      </Link>
    </div>
    <div
      className="NavBar_Hamburger-Menu"
      onClick={() => toggleDrawer(true)}
    >
      &#9776;
    </div>
    <div className="NavBar_List-Menu">
      <Link to="/pokedex">
        <li>Pokedex</li>
      </Link>

      <Link to="/image-game">
        <li>Image Game</li>
      </Link>

      <Link to="/stats-game">
        <li>Stats Game</li>
      </Link>

      <Link to="/about">
        <li>About</li>
      </Link>

      <Link to="/contact">
        <li>Contact</li>
      </Link>
    </div>
  </div>
);

export default NavBar;
