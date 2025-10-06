import FilterDropDown from "../components/FilterDropDown";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

const MoviesPage = () => {
  return (
    <main>
      <h2>All Movies</h2>

      {/* Search Bar */}
      <SearchBar />
      {/* Filter Dropdown */}
      <FilterDropDown />

      {/* Movie List Placeholder */}
      <MovieList />
    </main>
  );
};

export default MoviesPage;
