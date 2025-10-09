import { useEffect, useState } from "react";
import { deleteFavourite, getFavourites } from "../services/airtableApiService";
import dayjs from "dayjs";
import Loader from "./Loader";

const FavouriteList = () => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingId, setLoadingId] = useState(null);

  // run once when the page first loads
  useEffect(() => {
    async function fetchFavourites() {
      setLoading(true);

      // simulate slow API
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      // in real life , with multiple users and multiple api calls , loader would appear
      const result = await getFavourites();
      setFavourites(result.records);
      setLoading(false);
    }
    fetchFavourites();
  }, []);

  const handleDelete = async (recordId) => {
    setLoadingId(recordId);
    const result = await deleteFavourite(recordId);
    console.log(result);
    setFavourites((prev) => prev.filter((f) => f.id !== recordId));
    setLoadingId(null);
  };

  if (loading) return <Loader />;

  return (
    <main>
      <h1>My Favourites</h1>
      <h2>This page will show movies you've added to your favourites list.</h2>
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
            <p>
              Released:{" "}
              {dayjs(favourite.fields.Release_Date).format("MMM D, YYYY")}
            </p>
            <button onClick={() => handleDelete(favourite.id)} type="button">
              {loadingId === favourite.id ? <Loader /> : "Remove Favorite"}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default FavouriteList;
