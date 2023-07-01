import React, { useEffect, useState, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovirsHandler = useCallback( async() => { // 비동기 함수이므로 async를 붙여줌
    setIsLoding(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/"); // 기본적으로 GET 요청을 보냄

      if (!response.ok) {
        // json 형태의 데이터를 받지 못할 때 실행한다.
        throw new Error("Wrong!! please wait a moment");
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      // error 발생시 실행
      setError(error.message);
    }
    // 처리가 끝나면 로딩을 false로 바꿔줌
    setIsLoding(false);
  }, []);

  // 함수가 아닌 상수에 저장했기 때문에 useEffect를 초기화 뒤에 넣어줘야함
  useEffect(()=> {
    fetchMovirsHandler();
  }, [fetchMovirsHandler]) // 일반 함수를 넣어주면 무한 루프에 빠짐

  let content = <p>Found no movie</p>;

  // 오류 메세지를 state를 사용하여 관리
  // state에 따라서 다른 컨텐츠를   보여줌

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoding) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovirsHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
