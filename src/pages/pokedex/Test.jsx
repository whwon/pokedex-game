import React, { useState } from 'react';
import { useQuery } from 'react-query';

const fetchPlanets = async (page) => {
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  return res.json();
}

const Test = () => {
  const [ page, setPage ] = useState(1);
  const { data, status } = useQuery(['planets', page], () => fetchPlanets(page));
  console.log(data)

  return (
    <div>
      <h2>Planets</h2>

      <button onClick={() => setPage(1)}>page 1</button>
      <button onClick={() => setPage(2)}>page 2</button>
      <button onClick={() => setPage(3)}>page 3</button>

      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <div>
          {data.results.map(planet => {
            return (
              <div className="card">
                <h3>{ planet.name }</h3>
                <p>Population - { planet.population }</p>
                <p>Terrain - { planet.terrain }</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
}

export default Test;