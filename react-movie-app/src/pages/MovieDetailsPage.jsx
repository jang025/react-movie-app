import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/tmdbApiService";
import { useParams } from "react-router";
import dayjs from "dayjs";
import Loader from "../components/Loader";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchDetails() {
      try {
        setLoading(true);
        setError(null);
        // simulate slow API
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        // in real life , with multiple users and multiple api calls , loader would appear
        //! new state
        const data = await getMovieDetails(id);
        // if invalid movie
        if (!data) {
          throw new Error("Movie not found");
        }
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setError("Failed to load movie details");
      }
    }
    fetchDetails();
  }, [id]);

  if (loading || !movie) return <Loader />;
  if (error) return <p>{error}</p>;
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.details}>
        <h2 className={styles.overview}>Overview: {movie.overview}</h2>
        <div className={styles.tag}>
          <p>Genre: {movie.genres[0].name}</p>
          <p>
            Release Date: {dayjs(movie.release_date).format("MMMM D, YYYY")}
          </p>
          <p>Rating: {movie.vote_average}</p>
          <p>Language: {movie.original_language.toUpperCase()}</p>
        </div>
      </div>
    </main>
  );
};

export default MovieDetailsPage;
