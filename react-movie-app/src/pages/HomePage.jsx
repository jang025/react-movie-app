import { useEffect, useState } from "react";
import FilterDropDown from "../components/FilterDropDown";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { getMovies } from "../services/tmdbApiService";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  // use effect runs when search changes
  useEffect(() => {
    async function fetchMovies() {
      const fetchedMovies = await getMovies(search);
      setMovies(fetchedMovies);
    }

    fetchMovies();
  }, [search]);
  return (
    <main>
      <header>
        <h1>Welcome to the React Movie Application</h1>
        <h2>Browse popular movies and find your next watch!</h2>
        <SearchBar search={search} setSearch={setSearch} />
        <FilterDropDown />
      </header>
      <section>
        <MovieList movies={movies} />
      </section>
    </main>
  );
};

export default HomePage;
