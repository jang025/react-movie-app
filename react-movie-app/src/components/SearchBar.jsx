import styles from "./SearchBar.module.css";
const SearchBar = ({ search, setSearch }) => {
  function handleSearch(event) {
    //! new state
    const newSearch = event.target.value;
    setSearch(newSearch);
  }
  return (
    <div className={styles.container}>
      <img src="search.svg" alt="search" className={styles.icon} />
      <input
        type="search"
        placeholder="Search for a movie..."
        value={search}
        onChange={handleSearch}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;
