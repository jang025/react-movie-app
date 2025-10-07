import { useState } from "react";
import FilterDropDown from "../components/FilterDropDown";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

const MoviesPage = () => {
  const [search, setSearch] = useState("");
  return (
    <main>
      <header>
        <h1>Movies</h1>
        <SearchBar search={search} setSearch={setSearch} />
        <FilterDropDown />
      </header>
      <section>
        <MovieList search={search} />
      </section>
    </main>
  );
};

export default MoviesPage;
