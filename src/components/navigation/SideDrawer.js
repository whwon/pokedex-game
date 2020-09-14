import React from 'react';
import { Link } from 'react-router-dom';
import BackDrop from '../backdrop/BackDrop';

const SideDrawer = (props) => {

  const closeDrawer = () => {
    props.toggleDrawer(false);
  }

  return (
    <>
      <BackDrop toggleDrawer={props.toggleDrawer} />
      <div className="SideDrawer">
        <div
          className="SideDrawer_Close"
          onClick={() => closeDrawer()}
        >
          x
        </div>
        <ul className="SideDrawer_Links">
          <Link to="/pokedex" onClick={() => closeDrawer()}>
            <li>Pokedex</li>
          </Link>

          <Link to="/image-game" onClick={() => closeDrawer()}>
            <li>Image Game</li>
          </Link>

          <Link to="/stats-game" onClick={() => closeDrawer()}>
            <li>Stats Game</li>
          </Link>

          <Link to="/about" onClick={() => closeDrawer()}>
            <li>About</li>
          </Link>

          <Link to="/contact" onClick={() => closeDrawer()}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default SideDrawer;
