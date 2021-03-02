import React from 'react';

const PokeDexMobile = ({toggleDrawer}) => {

  return (
    <div className='pokedex'>
      <div className='header'>
        <div className="status-lights">
          <div className="blinker" />
          <div className="red-light" />
          <div className="yellow-light" />
          <div className="green-light" />
        </div>
        <div className="hamburger-menu" onClick={() => toggleDrawer(true)}>
          &#9776;
        </div>
      </div>
      <div className='screen'>

      </div>
      <div className='footer'>

      </div>
    </div>
  )
}

export default PokeDexMobile;