import React from 'react';
import './StartingPokeBall.css';
import { Link } from 'react-router-dom';

function StartingPokeBall() {

  return (
    <div className="pokeball">
      <Link to="/GameOptions">
        <div className="pokeball_button"></div>
      </Link>
    </div>
  );
}

export default StartingPokeBall;
