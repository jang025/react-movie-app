import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/tmdbApiService";
import { useParams } from "react-router";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function fetchDetails() {
      //! new state
      const data = await getMovieDetails(id);
      setMovie(data);
    }
    fetchDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;
  return (
    <main>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        style={{ width: 50 }}
      />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date.split("-")[0]}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Language: {movie.original_language.toUpperCase()}</p>
    </main>
  );
};

export default MovieDetailsPage;
