import { Link } from "react-router";
import { createFavourite } from "../services/airtableApiService";
import { useState } from "react";

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
  const handleAddFavourite = async function (event) {
    // prevent page reloading when i click on the button
    event.preventDefault();

    // preventing users from adding the add to fav button more than once
    if (isFavourite) return;
    await createFavourite(movie);
    setIsFavourite(true);
  };
  return (
    <Link to={`/movies/${id}`}>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "no-image.svg"
          }
          alt={title}
        />
        <div>
          <h3>{title}</h3>
          <div>
            <p>⭐ {vote_average ? vote_average.toFixed(1) : "NA"}</p>
            <p>{original_language ? original_language.toUpperCase() : "NA"}</p>
            <p>{release_date ? release_date.split("-")[0] : "NA"}</p>
          </div>
          <button onClick={handleAddFavourite} disabled={isFavourite}>
            {isFavourite ? "❤️ Added" : "❤️ Add to Favourites"}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
