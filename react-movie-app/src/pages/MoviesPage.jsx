import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { getMovies } from "../services/tmdbApiService";
import { useDebounce } from "../hooks/useDebounce";

const MoviesPage = ({ sortBy }) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  //implementing debounce , with a delay of 500ms
  const debouncedSearch = useDebounce(search, 500);

  // use effect runs when debouncedSearch changes
  useEffect(() => {
    async function fetchMovies() {
      //! new state
      const fetchedMovies = await getMovies(debouncedSearch, sortBy);
      setMovies(fetchedMovies);
    }

    fetchMovies();
  }, [debouncedSearch, sortBy]);
  return (
    <main>
      <header>
        <h1>Movies</h1>
        <SearchBar search={search} setSearch={setSearch} />
      </header>
      <section>
        <MovieList movies={movies} />
      </section>
    </main>
  );
};

export default MoviesPage;
