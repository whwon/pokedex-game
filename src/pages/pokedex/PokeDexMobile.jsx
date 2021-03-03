import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Screen from '../../components/Screen';

const fetchPokemon = async (pokemonId) => {
  // const maxPokedex = 807;
  // const url = 'https://pokeapi.co/api/v2/pokemon/';
  // let randPokedexID = Math.floor(Math.random() * Math.floor(maxPokedex));
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const image = await fetch(`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`)
  console.log(image)
  return response.json();
};

const PokeDexMobile = ({toggleDrawer}) => {
  const [pokemonId, setPokemonId] = useState(1)
  const { data, status } = useQuery(['pokemon', pokemonId], () => fetchPokemon(pokemonId))

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
      <Screen pokemon={data} status={status}/>
      <div className='control'>
        <div>
          <button disabled={pokemonId === 1} onClick={() => setPokemonId(old => Math.max(old - 1, 1))}>{'<'}</button>
        </div>
        <div>Pokemon ID: {pokemonId}</div>
        <div>
          <button onClick={() => setPokemonId(old => old + 1)}>{'>'}</button>
        </div>
      </div>
    </div>
  )
}

export default PokeDexMobile;