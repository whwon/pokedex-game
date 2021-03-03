import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
// import StartingPokeBall from './components/loading/StartingPokeBall';
import MainRoutes from './pages/routes/MainRoutes';

export default function App() {
  const queryClient = new QueryClient()
  // const [showPokeball, displayPokeball] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     displayPokeball(false)
  //   }, 5000);
  // }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <React.Fragment>
        {/* {showPokeball ?
          <StartingPokeBall displayPokeball={displayPokeball}/>
        : */}
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
        {/* } */}
      </React.Fragment>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
