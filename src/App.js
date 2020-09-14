import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StartingPokeBall from './components/loading/StartingPokeBall';
import Home from './pages/home/Home';
import PokeDex from './pages/pokedex/PokeDex';
import GuessImage from './pages/guess-image/GuessImage';
import GuessStats from './pages/guess-stats/GuessStats';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import NavBar from './components/navigation/NavBar';
import SideDrawer from './components/navigation/SideDrawer';

const App = () => {
  const [showDrawer, toggleDrawer] = useState(false);

  console.log(showDrawer);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar toggleDrawer={toggleDrawer} />
        {showDrawer && <SideDrawer toggleDrawer={toggleDrawer} />}
        <div className="Content">
          <Switch>
            <Route path="/" exact component={StartingPokeBall} />
            <Route path="/home" exact component={Home} />
            <Route path="/pokedex" component={PokeDex} />
            <Route path="/image-game" component={GuessImage} />
            <Route path="/stats-game" component={GuessStats} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
