import React from 'react'
import Loader from '../components/loading/loader';

const Screen = ({pokemon, status}) => {
  console.log(pokemon)
  return (
    <div className='screen'>
      {status === 'loading' &&
        <Loader />
      }
      {status === 'success' &&
        <>
          <div>{pokemon.name.toUpperCase()}</div>
          <img src={pokemon.sprites.other.dream_world.front_default} alt='view pokemon' />
          {/* <img className='screen_image' src={`https://pokeres.bastionbot.org/images/pokemon/${1}.png`} alt='view pokemon2' /> */}
        </>
      }
    </div>
  )
}

export default Screen

