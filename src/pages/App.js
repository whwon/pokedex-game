import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GuessImage from './GuessImage';
import GuessStats from './GuessStats';
import About from './About';
import Contact from './Contact';
import GameOptions from '../components/GameOptions';
import NavBar from '../components/NavBar';




function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="App-body">
          <Switch>
            <Route path="/" exact component={GameOptions} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/guessImage" component={GuessImage} />
            <Route path="/guessStats" component={GuessStats} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
