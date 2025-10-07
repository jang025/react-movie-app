import { useEffect, useState } from "react";
import FilterDropDown from "../components/FilterDropDown";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { getMovies } from "../services/tmdbApiService";

const MoviesPage = ({ sortBy }) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  // use effect runs when search changes
  useEffect(() => {
    async function fetchMovies() {
      //! new state
      const fetchedMovies = await getMovies(search, sortBy);
      setMovies(fetchedMovies);
    }

    fetchMovies();
  }, [search, sortBy]);
  return (
    <main>
      <header>
        <h1>Movies</h1>
        <SearchBar search={search} setSearch={setSearch} />
        <FilterDropDown />
      </header>
      <section>
        <MovieList movies={movies} />
      </section>
    </main>
  );
};

export default MoviesPage;
