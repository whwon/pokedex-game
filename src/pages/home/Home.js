import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <>
      <Link to="/pokedex" className="Card">
        <div>Pokedex</div>
        <p>Learn your Pokemon through the usage of this Pokedex that mimics the original feel and look of your 90s Pokedex. With over 800 Pokemon to learn about.</p>
      </Link>

      <Link to="/image-game" className="Card">
        <div>Guess Image</div>
      </Link>

      <Link to="/stats-game" className="Card">
        <div>Guess Stats</div>
      </Link>
    </>
  );
}

export default Home;
