import React, { useState, useEffect } from 'react';

function RandomPokeMon() {
  useEffect(() => {
    fetchPokeMon();
  }, []);

  let pokeMonType = '', pokeMonStats = '';
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

  if(pokemon.stats.length > 0) {
    pokeMonStats = pokemon.stats.map(baseStat => { return <div key={baseStat.stat['name']}>{baseStat.stat['name']}: {baseStat.base_stat}</div> })
  }

  if (pokemon.types.length === 1) {
    pokeMonType = pokemon.types[0]['type']['name'];
  } else if (pokemon.types.length === 2) {
    pokeMonType = `${pokemon.types[0]['type']['name']}, ${pokemon.types[1]['type']['name']}`;
  }

  return (
    <div>
      <h3>Pokemon!</h3>
      <img alt="" src={pokemon.sprites.front_default} />
      <div>{pokemon.name}</div>
      <div>Stats</div>
      {pokeMonStats !== '' ? pokeMonStats : null}
      <div>Type: {pokeMonType !== '' ? pokeMonType : null}</div>
      <span>Height: {pokemon.height}</span>
      <span>Weight: {pokemon.weight}</span>
      <button onClick={() => fetchPokeMon()}>New</button>
    </div>
  );
}

export default RandomPokeMon;
