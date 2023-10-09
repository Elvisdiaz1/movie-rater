const MovieImage = ({
  movies,
  column,
  addMovies,
  removeMovies,
  moviesComparing,
}) => {
  const isMovieBeingCompare = (movie) => {
    return moviesComparing.find(
      (comparingMovie) => comparingMovie.id === movie.id
    );
  };

  return (
    <div id="movies">
      {movies.slice(0, 9).map((movie) => (
        <div className="card" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`} />
          <p> {movie.title}</p>

          {isMovieBeingCompare(movie) ? (
            <button
              className="compare-container"
              onClick={() => removeMovies(movie.id)}
              style={{ color: "black", backgroundColor: "white" }}
            >
              Remove
            </button>
          ) : (
            <button
              className="compare-container"
              onClick={() => addMovies(movie)}
            >
              Compare
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieImage;
