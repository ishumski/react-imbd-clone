import React from 'react'

function MovieDetails({ detailes }) {
  return (
    <div className="movieDetailes" >
      <img src={detailes.Poster} />
      <h1>{detailes.Title}({detailes.Year})</h1>
      <span>Director:</span><span>{detailes.Director}</span>
      <span>Actors:</span><span>{detailes.Actors}</span>
      <span>Genre:</span><span>{detailes.Genre}</span>
      <span>Plot:</span><span>{detailes.Plot}</span>
    </div>
  )
}

export default MovieDetails
