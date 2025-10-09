import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { getMovies } from "../services/tmdbApiService";
import { useDebounce } from "../hooks/useDebounce";
import Loader from "../components/Loader";

const MoviesPage = ({ sortBy }) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  //implementing debounce , with a delay of 500ms
  const debouncedSearch = useDebounce(search, 500);

  // use effect runs when debouncedSearch changes
  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      // simulate slow API
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      // in real life , with multiple users and multiple api calls , loader would appear
      //! new state
      const fetchedMovies = await getMovies(debouncedSearch, sortBy);
      setMovies(fetchedMovies);
      setLoading(false);
    }

    fetchMovies();
  }, [debouncedSearch, sortBy]);
  return (
    <main>
      <header>
        <h1>Movies</h1>
        <SearchBar search={search} setSearch={setSearch} />
      </header>
      <section>{loading ? <Loader /> : <MovieList movies={movies} />}</section>
    </main>
  );
};

export default MoviesPage;
