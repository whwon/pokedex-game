import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <div className="Home">
      <Link to="/pokedex" className="Card">
        <div>Pokedex</div>
      </Link>

      <Link to="/image-game" className="Card">
        <div>Guess Image</div>
      </Link>

      <Link to="/stats-game" className="Card">
        <div>Guess Stats</div>
      </Link>
    </div>
  );
}

export default Home;
