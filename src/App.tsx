import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [visibleMovies, setVisibleMovie] = useState(moviesFromServer);

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={visibleMovies} />
      </div>
      <div className="sidebar">
        <NewMovie
          onAdd={(movie) => {
            setVisibleMovie([...visibleMovies, movie]);
          }}
        />
      </div>
    </div>
  );
};
