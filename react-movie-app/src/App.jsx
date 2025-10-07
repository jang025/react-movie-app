import { Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import FavoritesPage from "./pages/FavouritesPage";
import ErrorsPage from "./pages/ErrorsPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<ErrorsPage />} />
      </Routes>
    </>
  );
};

export default App;
