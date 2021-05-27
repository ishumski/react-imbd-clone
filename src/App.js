import React from 'react';
import './App.css';
import MovieDetails from './MovieDetails';
import SearchInput from './SearchInput';
import useRequest from './useRequest';

function App() {
  const [{ data: movie, isloading, isError }, doFetch] = useRequest('');

  const handleMovieChange = async (movie) => {

    if (!movie) {
      return;
    }

    const { imdbID } = movie;
    doFetch(`https://www.omdbapi.com/?i=${imdbID}&apiKey=656f5a25`);
  };
  return (
    <div className='app'>
      <SearchInput
        onChange={handleMovieChange}
      />

      {movie && <MovieDetails detailes={movie} />}

      {isloading && 'Loading...'}
      {isError && 'Something went wrong'}

    </div>
  );
}
export default App;
