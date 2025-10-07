import { useState } from "react";
import FavouriteList from "../components/FavouriteList";
import SearchBar from "../components/SearchBar";

const FavouritesPage = () => {
  const [search, setSearch] = useState("");
  return (
    <main>
      <header>
        <h1>Your Favourite Movies</h1>
        <SearchBar search={search} setSearch={setSearch} />
      </header>
      <section>
        <FavouriteList search={search} />
      </section>
    </main>
  );
};

export default FavouritesPage;
