import React, { useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavBar from '../../components/navigation/NavBar';
import SideDrawer from '../../components/navigation/SideDrawer';
import Home from '../home/Home';
// import PokeDex from '../pokedex/PokeDex';
import PokeDexMobile from '../pokedex/PokeDexMobile';
import GuessImage from '../guess-image/GuessImage';
import GuessStats from '../guess-stats/GuessStats';
import About from '../about/About';
import Contact from '../contact/Contact';

const MainRoutes = ({ location }) => {
  const [showDrawer, toggleDrawer] = useState(false);

  return (
    <div className="App">
      {location.pathname === '/pokedex' ? null : <NavBar toggleDrawer={toggleDrawer}/>}
      {showDrawer && <SideDrawer toggleDrawer={toggleDrawer} />}
      <div className={location.pathname === '/pokedex' ? "NavLess-Content" : "Content"}>
        <Switch>
          <Route path={["/", "/home"]} exact component={Home} />
          <Route path="/pokedex">
            <PokeDexMobile toggleDrawer={toggleDrawer}/>
          </Route>
          <Route path="/image-game" component={GuessImage} />
          <Route path="/stats-game" component={GuessStats} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(MainRoutes);
