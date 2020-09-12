import React, { useState, useEffect } from 'react';

function GuessStats() {
  useEffect(() => {
    fetchPokeMon();
  }, []);

  const initialScores = { score: 0, total: 0 };
  let pokeMonType = '', pokeMonStats = '';
  const [pokemon, setPokemon] = useState({ stats: '', types: '' });
  const [guess, setUserGuess] = useState('');
  let [{ score, total }, keepScore] = useState(initialScores);

  const fetchPokeMon = async () => {
    const maxPokedex = 807;
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    let pokedexID = Math.floor(Math.random() * Math.floor(maxPokedex));
    const apiUrl = `${url}${pokedexID}`;
    const response = await fetch(apiUrl);
    const pokemon = await response.json();
    setPokemon(pokemon);
    console.log(pokemon);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess === pokemon.name) {
      fetchPokeMon();
      setUserGuess('');
      pointScore('Correct');
    } else {
      pointScore('Incorrect');
    }
  };

  const pointScore = (result) => {
    total += 1;
    if (result === 'Correct') {
      score += 1;
      keepScore({ score, total });
    } else {
      keepScore({ score, total });
    }
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
      <div>Stats</div>
      {pokeMonStats !== '' ? pokeMonStats : null}
      <div>Type: {pokeMonType !== '' ? pokeMonType : null}</div>
      <span>Height: {pokemon.height}</span>
      <span>Weight: {pokemon.weight}</span>
      <button onClick={() => fetchPokeMon()}>New</button>
      <form onSubmit={handleSubmit}>
        <label>Guess:</label>
        <input
          type="text"
          name="playerGuess"
          value={guess}
          required
          onChange={(e) => setUserGuess(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <div>
        <label>Score: {score}</label>
        <label>Total: {total}</label>
      </div>
    </div>
  );
}

export default GuessStats;
