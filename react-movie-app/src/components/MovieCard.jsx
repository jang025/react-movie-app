import { Link } from "react-router";
import { createFavourite } from "../services/airtableApiService";

const MovieCard = ({
  movie,
  id,
  poster_path,
  title,
  vote_average,
  original_language,
  release_date,
}) => {
  const handleAddFavourite = async function (event) {
    // prevent page reloading
    event.preventDefault();
    await createFavourite(movie);
    alert(`${title} added to favourites`);
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
          <button onClick={handleAddFavourite}>❤️ Add to Favourites</button>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
