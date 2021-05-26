import React, { useState, useEffect } from 'react';
import './App.css';
import MovieDetails from './MovieDetails';
import SearchInput from './SearchInput';

function App() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const currMovie = (id) => {
      fetch(`https://www.omdbapi.com/?i=${id}&apiKey=656f5a25`)
        .then(result => result.json())
        .then(data => {
          console.log(data.result);
          setMovie(data.result);
        })
    }

  }, [])

  // const currentMovie = (id) => {
  //   return fetch(`https://www.omdbapi.com/?i=${id}&apiKey=656f5a25`)
  //     .then((result) => result.json())
  //     .then((result) => console.log(result))
  // }
  // console.log(currentMovie('tt0399295'))


  return (
    <div className='app'>
      <SearchInput />
      {movie.map(movie => {
        <MovieDetails key={movie.detailes.imdbID} detailes={movie.detailes} />
      })}
    </div>
  );
}
export default App;
