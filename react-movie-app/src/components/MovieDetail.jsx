import { Link } from "react-router";

const MovieDetail = ({
  id,
  poster_path,
  title,
  vote_average,
  original_language,
  release_date,
}) => {
  return (
    <Link
      to={`/movies/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
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
            <img src="star.svg" alt="star" style={{ width: 50 }} />
            <p>{vote_average ? vote_average.toFixed(1) : "NA"}</p>
            <p>{original_language ? original_language.toUpperCase() : "NA"}</p>
            <p>{release_date ? release_date.split("-")[0] : "NA"}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieDetail;
