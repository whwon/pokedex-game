import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import StartingPokeBall from './components/loading/StartingPokeBall';
import MainRoutes from './pages/routes/MainRoutes';

export default function App() {
  const [showPokeball, displayPokeball] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      displayPokeball(false)
    }, 5000);
  }, [])

  return (
    <React.Fragment>
      {showPokeball ?
        <StartingPokeBall displayPokeball={displayPokeball}/>
      :
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
      }
    </React.Fragment>
  );
}
