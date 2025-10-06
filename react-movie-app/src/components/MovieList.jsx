import MovieDetail from "./MovieDetail";

const movies = [
  {
    adult: false,
    backdrop_path: "/1RgPyOhN4DRs225BGTlHJqCudII.jpg",
    genre_ids: [16, 28, 14, 53],
    id: 1311031,
    original_language: "ja",
    original_title: "劇場版「鬼滅の刃」無限城編 第一章 猗窩座再来",
    overview:
      "The Demon Slayer Corps are drawn into the Infinity Castle, where Tanjiro, Nezuko, and the Hashira face terrifying Upper Rank demons in a desperate fight as the final battle against Muzan Kibutsuji begins.",
    popularity: 407.2322,
    poster_path: "/sUsVimPdA1l162FvdBIlmKBlWHx.jpg",
    release_date: "2025-07-18",
    title: "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
    video: false,
    vote_average: 7.8,
    vote_count: 425,
  },
];

const MovieList = () => {
  return (
    // <div>
    //   <div>
    //     <img src="https://via.placeholder.com/200x300" alt="Movie Poster" />
    //     <h3>Movie Title</h3>
    //     <p>Rating: 8.5</p>
    //     <p>Release Date: 2023-01-01</p>
    //   </div>

    //   <div>
    //     <img src="https://via.placeholder.com/200x300" alt="Movie Poster" />
    //     <h3>Another Movie</h3>
    //     <p>Rating: 7.9</p>
    //     <p>Release Date: 2024-05-15</p>
    //   </div>
    // </div>
    <section>
      {movies.map((movie) => (
        <MovieDetail title={movie.title} />
      ))}
    </section>
  );
};

export default MovieList;
