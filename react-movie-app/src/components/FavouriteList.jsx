import { useEffect, useState } from "react";
import { deleteFavourite, getFavourites } from "../services/airtableApiService";

const FavouriteList = () => {
  const [favourites, setFavourites] = useState([]);

  // run once when the page first loads
  useEffect(() => {
    async function fetchFavourites() {
      const result = await getFavourites();
      setFavourites(result.records);
    }
    fetchFavourites();
  }, []);

  const handleDelete = async (recordId) => {
    const result = await deleteFavourite(recordId);
    console.log(result);
    setFavourites((prev) => prev.filter((f) => f.id !== recordId));
  };

  return (
    <main>
      <h2>My Favourites</h2>
      <p>This page will show movies you've added to your favourites list.</p>
      <ul>
        {favourites.map((favourite) => (
          <li key={favourite.id}>
            <img
              src={favourite.fields.Poster_URL}
              alt={favourite.fields.Title}
              width="100"
            />
            <h3>{favourite.fields.Title}</h3>
            <p>⭐ {favourite.fields.User_Rating}</p>
            <button onClick={() => handleDelete(favourite.id)}>
              Remove Favorite
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default FavouriteList;
