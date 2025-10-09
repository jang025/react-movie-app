import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/tmdbApiService";
import { useParams } from "react-router";
import dayjs from "dayjs";
import Loader from "../components/Loader";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      // simulate slow API
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      // in real life , with multiple users and multiple api calls , loader would appear
      //! new state
      const data = await getMovieDetails(id);
      setMovie(data);
      setLoading(false);
    }
    fetchDetails();
  }, [id]);

  if (loading || !movie) return <Loader />;
  return (
    <main>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        style={{ width: 50 }}
      />
      <h2>Overview: {movie.overview}</h2>
      <p>Genre: {movie.genres[0].name}</p>
      <p>Tagline: {movie.tagline}</p>
      <p>Release Date: {dayjs(movie.release_date).format("MMMM D, YYYY")}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Language: {movie.original_language.toUpperCase()}</p>
    </main>
  );
};

export default MovieDetailsPage;
