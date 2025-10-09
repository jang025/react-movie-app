import { Link } from "react-router";
import { createFavourite } from "../services/airtableApiService";
import { useState } from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({
  movie,
  id,
  poster_path,
  title,
  vote_average,
  original_language,
  release_date,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleAddFavourite = async function (event) {
    // prevent page reloading when i click on the button
    event.preventDefault();

    // preventing users from adding the add to fav button more than once
    if (isFavourite) return;
    setLoading(true);
    await createFavourite(movie);
    setIsFavourite(true);
    setLoading(false);
  };
  return (
    <div className={styles.card}>
      <Link to={`/movies/${id}`}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "no-image.svg"
          }
          alt={title}
          className={styles.poster}
        />
        <div>
          <h3>{title}</h3>
          <div>
            <p>⭐ {vote_average ? vote_average.toFixed(1) : "NA"}</p>
            <p>{original_language ? original_language.toUpperCase() : "NA"}</p>
            <p>{release_date ? release_date.split("-")[0] : "NA"}</p>
          </div>
          <button
            onClick={handleAddFavourite}
            disabled={isFavourite}
            type="button"
          >
            {isFavourite
              ? "❤️ Added"
              : loading
              ? "Adding .........."
              : "❤️ Add to Favourites"}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
