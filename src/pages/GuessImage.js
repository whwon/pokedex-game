import React, { useState, useEffect } from 'react';

function GuessImage() {
    useEffect(() => {
        fetchPokeMon();
    }, []);

    const [pokemon, setPokemon] = useState({sprites: {}});
    let inputField = useState(true);
    const [guess, setUserGuess] = useState('');
    const initialScores = {score: 0, total: 0}
    let [{score, total}, keepScore] = useState(initialScores);

    const fetchPokeMon = async () => {
        const maxPokedex = 807;
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        let pokedexID = Math.floor(Math.random() * Math.floor(maxPokedex));
        const apiUrl = `${url}${pokedexID}`;
        const response = await fetch(apiUrl);
        const pokemon = await response.json();
        setPokemon(pokemon);
        console.log(pokemon.name);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(guess === pokemon.name) {
            fetchPokeMon();
            setUserGuess('');
            pointScore('Correct')
        } else {
            pointScore('Incorrect')
        }
    }

    const pointScore = (result) => {
        total += 1;
        if(result === 'Correct') {
            score += 1;
            keepScore({score, total})
        } else {
            keepScore({score, total})
        }
    }

    return (
        <div>
            <h3>Pokemon!</h3>
            <img alt='' src={pokemon.sprites.front_default}/>
            <button onClick={() => fetchPokeMon()}>New</button>
            {inputField &&
                <form  onSubmit={handleSubmit}>
                    <label>Guess:</label>
                    <input type="text" name="playerGuess" value={guess} required onChange={(e) => setUserGuess(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </form>
            }
            <div>
                <label>Score: {score}</label>
                <label>Total: {total}</label>
            </div>
        </div>
    )
}

export default GuessImage;