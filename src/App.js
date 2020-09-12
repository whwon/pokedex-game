import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartingPokeBall from './components/loading/StartingPokeBall';
import GameOptions from './pages/home/GameOptions';
import PokeDex from './pages/pokedex/PokeDex';
import GuessImage from './pages/guess-image/GuessImage';
import GuessStats from './pages/guess-stats/GuessStats';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import NavBar from './components/navigation/NavBar';

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
