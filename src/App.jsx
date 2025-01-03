import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Landing from "./Landing";
import MovieList from "./MovieList"; 
import API from "./API";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [defaultMovies, setDefaultMovies] = useState([]);

  const API_KEY = "42297024f346a26f4287021dcc26a0a1";
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results);
        setDefaultMovies(data.results); // Save default movies for "Home"
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Router>
      <Navbar setMovies={setMovies} setError={setError} />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Landing movies={defaultMovies} />
              <API movies={defaultMovies} error={error} />
            </>
          }
        />

        {/* Trending Route */}
        <Route path="/trending" element={<MovieList movies={movies} />} />

        {/* Search Results Route */}
        <Route path="/search" element={<MovieList movies={movies} />} />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
