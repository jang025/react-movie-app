import FilterDropDown from "../components/FilterDropDown";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <main>
      <section>
        <h1>Welcome to the React Movie Application</h1>
        <p>Browse popular movies and find your next watch!</p>
      </section>

      {/* Search Bar */}
      <SearchBar />

      {/* Filter Dropdown */}
      <FilterDropDown />

      {/* Movie List  */}
      <MovieList />
    </main>
  );
};

export default HomePage;
