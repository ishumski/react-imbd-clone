import React, { useState } from 'react';
import './App.css';
import MovieDetails from './MovieDetails';
import SearchInput from './SearchInput';

function App() {

  const [movies, setMovies] = useState([]);

  
  const currentMovie = (id) => {
    return fetch(`https://www.omdbapi.com/?i=${id}&apiKey=656f5a25`)
      .then((result) => result.json())
      .then((result)=> console.log(result))
  }
  console.log(currentMovie('tt0399295'))


  return (
    <div className='app'>
      <SearchInput />
      {movies.map(movie => {
        <MovieDetails detailes={movie.detailes} />
      })}
    </div>
  );
}
export default App;
