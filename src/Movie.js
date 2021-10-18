import React from 'react';

const Movie = ({ movie, genres }) => (
  <div className='movieWrapper'>
    <h2 className='movieTitle'>{movie.original_title}</h2>
    <div>
      <img
        className='image'
        alt={`${movie.original_title}`}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      />
    </div>
    <p className='overview'>{movie.overview}</p>
    <p>
      <strong>Rating:</strong> {movie.vote_average}
    </p>
    <p>
      <strong>Popularity:</strong> {movie.popularity}
    </p>
    <p>
      <strong>Genres:</strong> {genres}
    </p>
  </div>
);

export default Movie;
