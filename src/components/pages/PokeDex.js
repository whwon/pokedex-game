import React, { useState, useEffect } from 'react';
import './PokeDex.css';

function PokeDex() {
  useEffect(() => {
    fetchPokeMon();
  }, []);

  let pokeMonType1 = '',
    pokeMonType2 = '',
    typeColor1 = '',
    typeColor2 = '',
    pokeMonStats = '';
  const pokeMonTypeColor = {
    normal: '#a8a878',
    water: '#6890f0',
    electric: '#f8d030',
    fighting: '#c03028',
    ground: '#e0c068',
    psychic: '#f85888',
    rock: '#b8a038',
    dark: '#705848',
    steel: '#b8b8d0',
    fire: '#f08030',
    grass: '#78c850',
    ice: '#98d8d8',
    poison: '#a040a0',
    flying: '#a890f0',
    bug: '#a8b820',
    ghost: '#705898',
    dragon: '#7038f8',
    fairy: '#f0b6bc',
  };
  const [pokemon, setPokemon] = useState({ sprites: {}, stats: '', types: '' });

  const fetchPokeMon = async () => {
    const maxPokedex = 807;
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    let pokedexID = Math.floor(Math.random() * Math.floor(maxPokedex));
    const apiUrl = `${url}${pokedexID}`;
    const response = await fetch(apiUrl);
    const pokemon = await response.json();
    setPokemon(pokemon);
  };

  if (pokemon.stats.length > 0) {
    pokeMonStats = pokemon.stats.map((baseStat) => {
      return (
        <div className="ability-stats-info" key={baseStat.stat['name']}>
          <div>{baseStat.stat['name']}:</div>
          <div>{baseStat.base_stat}</div>
        </div>
      );
    });
  }

  if (pokemon.types.length === 1) {
    pokeMonType1 = pokemon.types[0]['type']['name'];
    typeColor1 = pokeMonTypeColor[pokeMonType1];
  } else if (pokemon.types.length === 2) {
    pokeMonType1 = pokemon.types[0]['type']['name'];
    pokeMonType2 = pokemon.types[1]['type']['name'];
    typeColor1 = pokeMonTypeColor[pokeMonType1];
    typeColor2 = pokeMonTypeColor[pokeMonType2];
  }

  return (
    <div className="pokedex-body">
      <div className="pokedex-left">
        <div className="status-lights">
          <div className="blinker" />
          <div className="red-light" />
          <div className="yellow-light" />
          <div className="green-light" />
        </div>
        <div className="screen-container">
          <div className="screen">
            <img
              className="pokemon-image"
              alt=""
              src={pokemon.sprites.front_default}
            />
          </div>
          <div className="underScreen-detail">
            <div className="red-dot" />
            <div className="quad-horizontal">&#8803;</div>
          </div>
        </div>
        <div className="bottom-detail">
          <div className="pokemon-id">{pokemon.id}</div>
          <div className="next-pokemon">
            <div className="right-arrow-button" onClick={() => fetchPokeMon()}>
              &#9654;
            </div>
          </div>
        </div>
      </div>
      <div className="pokedex-right">
        <div className="pokemon-name-container">
          <span className="pokemon-name">{pokemon.name}</span>
        </div>
        <div className="stats-container">
          <div className="ability-stats-container">
            <div className="ability-stats-label">Stats</div>
            {pokeMonStats !== '' ? pokeMonStats : null}
          </div>
          <div className="physical-stats-container">
            <div>Height:</div>
            <div>{pokemon.height}</div>
            <div>Weight:</div>
            <div>{pokemon.weight}</div>
          </div>
        </div>
        {pokeMonType2 !== '' && pokeMonType1 !== '' ? (
          <div className="pokemon-types">
            <div style={{ background: typeColor1 }} className="pokemon-type1">
              {pokeMonType1}
            </div>
            <div style={{ background: typeColor2 }} className="pokemon-type2">
              {pokeMonType2}
            </div>
          </div>
        ) : (
          <div className="pokemon-type" style={{ background: typeColor1 }}>
            <div>{pokeMonType1 !== '' ? pokeMonType1 : null}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokeDex;
