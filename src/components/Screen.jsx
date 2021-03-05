import React from 'react'
import Loader from '../components/loading/loader';

export const PokemonStats= ({stats}) =>
  stats.map((stat, index) =>
    <div key={index} className='screen_stats'>
      <div>{stat.stat.name.toUpperCase()}:</div>
      <div>{stat.base_stat}</div>
    </div>
  )

const Screen = ({pokemon, showInfo, isLoading, isSuccess}) => {
  console.log(pokemon)
  return (
    <div className='screen'>
      <div className='screen_inner-screen'>
        {isLoading &&
          <Loader />
        }
        {isSuccess && !showInfo &&
          <img className='screen_image' src={pokemon.sprites.other.dream_world.front_default} alt='view pokemon' />
          // <img className='screen_image' src={`https://pokeres.bastionbot.org/images/pokemon/${1}.png`} alt='view pokemon2' />
        }
        {isSuccess && showInfo && <PokemonStats stats={pokemon.stats} />}
      </div>
    </div>
  )
}

export default Screen

