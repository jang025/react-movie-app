import MovieDetail from "./MovieDetail";

const MovieList = ({ movies }) => {
  return (
    <section>
      {movies.map((movie) => (
        <MovieDetail title={movie.title} key={movie.id} />
      ))}
    </section>
  );
};

export default MovieList;
