import React from 'react';

const StartingPokeBall = ({displayPokeball}) =>
  <div className="pokeball">
    <div className="pokeball_button" onClick={() => displayPokeball(false)}/>
  </div>

export default StartingPokeBall;
