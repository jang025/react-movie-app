const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME;
const AIRTABLE_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

export async function createFavourite(movie) {
  try {
    const response = await fetch(AIRTABLE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
      body: JSON.stringify({
        fields: {
          Title: movie.title,
          TMDB_ID: movie.id,
          Poster_URL: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          Release_Date: movie.release_date,
          User_Rating: movie.vote_average,
        },
      }),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error.message);
  }
}
export async function getFavourites() {
  try {
    const response = await fetch(AIRTABLE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteFavourite(recordId) {
  try {
    await fetch(`${AIRTABLE_URL}/${recordId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    });
  } catch (error) {
    console.error("Error deleting favourite:", error);
  }
}
