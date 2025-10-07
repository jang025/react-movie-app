const SearchBar = ({ search, setSearch }) => {
  function handleSearch(event) {
    //! new state
    const newSearch = event.target.value;
    setSearch(newSearch);
  }
  return (
    <div>
      <img src="search.svg" alt="search" width={50} height={50} />
      <input
        type="text"
        placeholder="Search for a movie..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
