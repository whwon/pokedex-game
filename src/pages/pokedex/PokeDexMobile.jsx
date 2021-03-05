import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import Screen from '../../components/Screen';

const fetchPokemon = async (pokemonId) => {
  // const maxPokedex = 807;
  // const url = 'https://pokeapi.co/api/v2/pokemon/';
  // let randPokedexID = Math.floor(Math.random() * Math.floor(maxPokedex));
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  // const image = await fetch(`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`)
  return response.json();
};

const PokeDexMobile = ({toggleDrawer}) => {
  const [pokemonId, setPokemonId] = useState(1)
  const [showInfo, toggleInfo] = useState(false)
  const { data, isLoading, isSuccess } = useQuery(['pokemon', pokemonId], () => fetchPokemon(pokemonId))
  const typeAndColors = {
    "normal": "#a8a878",
    "water": "#6890f0",
    "electric": "#f8d030",
    "fighting": "#c03028",
    "ground": "#e0c068",
    "psychic": "#f85888",
    "rock": "#b8a038",
    "dark": "#705848",
    "steel": "#b8b8d0",
    "fire": "#f08030",
    "grass": "#78c850",
    "ice": "#98d8d8",
    "poison": "#a040a0",
    "flying": "#a890f0",
    "bug": "#a8b820",
    "ghost": "#705898",
    "dragon": "#7038f8",
    "fairy": "#f0b6bc"
  }

  // if(isSuccess && data) setPokemonName(data.name.toUpperCase())

  const searchPokemon = (event) => {
    event.preventDefault();
  }

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
      <Screen pokemon={data} showInfo={showInfo} isLoading={isLoading} isSuccess={isSuccess}/>
      <div className='control'>
        {/* <div onSubmit={searchPokemon}> */}
        <div className='control_name-container'>
          {isSuccess &&
            <div className='control_name'>{data.name.toUpperCase()}</div>
          }
        </div>

          <div className='control_info-button-wrapper' onClick={() => toggleInfo(!showInfo)}>
            <button className='control_info-button'>i</button>
          </div>
        {/* </div> */}
        {/* <div className='control_pokemon-id'>ID: {pokemonId}</div> */}
        {isSuccess && data.types.map((type, index) =>
          <div className='control_pokemon-types' style={{backgroundColor: typeAndColors[type.type.name]}}>
            <div key={index} className='control_pokemon-type'>{type.type.name}</div>
          </div>
        )}
        <div className='control_button-group'>
          <div className='control_left-button-wrapper'>
            <button className='control_direction-button' disabled={pokemonId === 1} onClick={() => setPokemonId(old => Math.max(old - 1, 1))}>{'<'}</button>
          </div>
          <div className='control_right-button-wrapper'>
            <button className='control_direction-button' onClick={() => setPokemonId(old => old + 1)}>{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokeDexMobile;