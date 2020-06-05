import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartingPokeBall from './loading/StartingPokeBall';
import GameOptions from './pages/GameOptions';
import PokeDex from './pages/PokeDex';
import GuessImage from './pages/GuessImage';
import GuessStats from './pages/GuessStats';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './navigation/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="App-body">
          <Switch>
            <Route path="/" exact component={StartingPokeBall} />
            <Route path="/GameOptions" exact component={GameOptions} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/PokeDex" component={PokeDex} />
            <Route path="/guessImage" component={GuessImage} />
            <Route path="/guessStats" component={GuessStats} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
