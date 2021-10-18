import React, { useState, useEffect } from 'react';
import { fetchMovies, fetchGenres } from './api';
import Movie from './Movie';
import Checkbox from './Checkbox';
import './styles.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState([]);
  const [genres, setGenres] = useState([]);
  const [checkedList, setChecked] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetchMovies();
      response = await response.json();
      response.sort((a, b) => b.popularity - a.popularity);
      setMovies(response);
      setResults(response);
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetchGenres();
      response = await response.json();
      setGenres(response);
    };

    fetchData().catch(console.error);
  }, []);

  const findGenres = (arr) => {
    const newGenres = {};
    genres.forEach((genre) => {
      newGenres[genre.id] = { name: genre.name };
    });

    const names = arr.map((id) => {
      if (newGenres[id]) {
        return newGenres[id].name;
      }
      return '';
    });

    return names.join(', ');
  };

  const handleCheckboxChange = (id) => {
    if (checkedList.includes(id)) {
      setChecked((prevList) => {
        const filteredGenres = prevList.filter((el) => el !== id);
        const filteredMovies = movies.filter((movie) => filteredGenres.some((el) => movie.genre_ids.includes(el)));
        if (!filteredMovies.length) {
          setResults(movies);
        }
        if (filteredMovies.length) {
          setResults(filteredMovies);
        }

        return filteredGenres;
      });
    }

    if (!checkedList.includes(id)) {
      setChecked((prevList) => {
        const filteredGenres = [...prevList, id];
        const filteredMovies = movies.filter((movie) => filteredGenres.some((el) => movie.genre_ids.includes(el)));
        setResults(filteredMovies);

        return filteredGenres;
      });
    }
  };

  return (
    <div className='container'>
      <ul className='checkboxList'>
        {genres &&
          genres.map(({ id, name }) => (
            <li key={id} className='listItem'>
              <Checkbox label={name} value={checkedList.includes(id)} onChange={() => handleCheckboxChange(id)} />
            </li>
          ))}
      </ul>
      <h1>
        <span>
          <span role='img' aria-label='Popcorn emoji'>
            🍿
          </span>{' '}
          Now playing
        </span>
      </h1>
      <div className='title'>
        {results.length ? (
          <div>
            Showing <strong>{results.length}</strong> {results.length === 1 ? 'movie' : 'movies'}
          </div>
        ) : (
          <div>No movie showing now!</div>
        )}
      </div>
      <div>
        {results && results.map((movie) => <Movie key={movie.id} movie={movie} genres={findGenres(movie.genre_ids)} />)}
      </div>
    </div>
  );
};

export default Movies;
