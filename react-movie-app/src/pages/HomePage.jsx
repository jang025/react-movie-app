import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { getMovies } from "../services/tmdbApiService";
import { useDebounce } from "../hooks/useDebounce";
import Loader from "../components/Loader";
import styles from "./HomePage.module.css";

const HomePage = ({ sortBy }) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  //implementing debounce , with a delay of 500ms
  const debouncedSearch = useDebounce(search, 500);

  // use effect runs when search changes
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
      <header className={styles.header}>
        <h1 className={styles.heading}>
          Welcome to the React Movie Application
        </h1>
        <h2 className={styles.subheading}>
          Browse popular movies and find your next watch!
        </h2>
      </header>
      <SearchBar search={search} setSearch={setSearch} />
      <section>{loading ? <Loader /> : <MovieList movies={movies} />}</section>
    </main>
  );
};

export default HomePage;
