import React from 'react';
import { Link } from 'react-router-dom';
import pokeball from '../../assets/image/pokeball.png';

const NavBar = (props) => {
  return (
    <React.Fragment>
      <div className="NavBar">
        <div className="NavBar_Logo">
          <Link to="/">
            <li className="Current" href="#home">
              <img alt="pokeball" src={pokeball} />
              <div className="NavBar_Title">Who's That PokeMon</div>
            </li>
          </Link>
        </div>
        <div
          className="NavBar_Hamburger-Menu"
          onClick={() => props.toggleDrawer(true)}
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
    </React.Fragment>
  );
};
export default NavBar;
