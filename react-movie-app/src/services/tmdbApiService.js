const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function getMovies(search, sortBy) {
  // if there's a search term , update the url with the search query
  const url = search
    ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        search
      )}`
    : `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=1&sort_by=${sortBy}`;
  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data.results;
  } catch (error) {
    console.error(error.message);
  }
}
