import React from 'react'
import Loader from '../components/loading/loader';

const Screen = ({pokemon, status}) => {
  console.log(pokemon)
  return (
    <div className='screen'>
      <div className='screen_inner-screen'>
        {status === 'loading' &&
          <Loader />
        }
        {status === 'success' &&
          <img className='screen_image' src={pokemon.sprites.other.dream_world.front_default} alt='view pokemon' />
          // <img className='screen_image' src={`https://pokeres.bastionbot.org/images/pokemon/${1}.png`} alt='view pokemon2' />
        }
      </div>
    </div>
  )
}

export default Screen

