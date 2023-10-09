import Header from "./components/Header";
import MovieImage from "./components/MovieImage";
import { useEffect, useState } from "react";
import Rating from "./components/Rating";

function App() {
  const moviesURL =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US&page=1&region=US";

  const [movies, setMovies] = useState(null);
  const [moviesToCompare, setMoviesToCompare] = useState([]);

  useEffect(() => {
    fetch(moviesURL)
      .then((res) => {
        return res.json();
      })
      .then(({ results }) => {
        setMovies(results);
      });
  }, []);

  const column = [
    { heading: "Title", value: "title" },
    { heading: "Date", value: "release_date" },
    { heading: "Vote Count", value: "vote_count" },
    { heading: "Vote Average", value: "vote_average" },
  ];

  const addMoviesToCompare = (newMovie) => {
    const alredyAdded = moviesToCompare.find(
      (movie) => movie.id === newMovie.id
    );

    if (alredyAdded) {
      return;
    }

    const newArrayOfMovies = [...moviesToCompare, newMovie];

    setMoviesToCompare(newArrayOfMovies);
  };

  const removeMovieFromComparing = (movieId) => {
    // todo: Remove movie from the comparing Array
    const filteredMovies = moviesToCompare.filter(function (movie) {
      return movieId !== movie.id;
    });

    // var filtered = [];
    // for (let index = 0; index < moviesToCompare.length; index++) {
    //   var currentMovie = moviesToCompare[index];

    //   if (currentMovie.id !== movieId) {
    //     filtered.push(currentMovie);
    //   }
    // }

    setMoviesToCompare(filteredMovies);
  };

  return (
    <div className="container">
      <Header />

      {movies && (
        <MovieImage
          movies={movies}
          column={column}
          addMovies={addMoviesToCompare}
          moviesComparing={moviesToCompare}
          removeMovies={removeMovieFromComparing}
        />
      )}

      {movies && (
        <Rating movie={movies} movies={moviesToCompare} column={column} />
      )}
    </div>
  );
}
{
}
export default App;
