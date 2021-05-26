import React, { useState, useEffect } from 'react';
import './App.css';
import MovieDetails from './MovieDetails';
import SearchInput from './SearchInput';

function App(detailes) {

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

  }, [movie]);




  return (
    <div className='app'>
      <SearchInput
        onChange={(event) => setMovie(event.target.value)}
        onClick={()=>{console.log(movie)}}
      />

      <MovieDetails
        key={detailes.imdbID}
        detailes={detailes}

      />

    </div>
  );
}
export default App;
