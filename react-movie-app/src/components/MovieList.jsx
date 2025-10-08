import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard
          movie={movie}
          title={movie.title}
          key={movie.id}
          id={movie.id}
          vote_average={movie.vote_average}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          original_language={movie.original_language}
        />
      ))}
    </ul>
  );
};

export default MovieList;
