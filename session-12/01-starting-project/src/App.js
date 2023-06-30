import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  function fetchMovirsHandler() {
    fetch("https://swapi.dev/api/films/")// 기본적으로 GET 요청을 보냄
    .then(response => {
      return response.json()
    }).then(data => {
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title:movieData.title, 
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setMovies(transformedMovies)
    });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovirsHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
