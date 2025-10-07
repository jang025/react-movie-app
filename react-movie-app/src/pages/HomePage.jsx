import { useState } from "react";
import FilterDropDown from "../components/FilterDropDown";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [search, setSearch] = useState("");
  return (
    <main>
      <header>
        <h1>Welcome to the React Movie Application</h1>
        <h2>Browse popular movies and find your next watch!</h2>
        <SearchBar search={search} setSearch={setSearch} />
        <FilterDropDown />
      </header>
      <section>
        <MovieList search={search} />
      </section>
    </main>
  );
};

export default HomePage;
