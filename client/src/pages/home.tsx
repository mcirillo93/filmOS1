// // src/pages/Home.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';      // (AJ): REACT Link Imported Here: 
import axios from 'axios';
import SearchBar from '../components/searchBar';   // (AJ): Corrected Import Path
import MovieList from '../components/movieList';  // (AJ): Corrected Import Path
import { Movie } from '../components/types';    // (AJ): Movie Types Link Imported Here: 


const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async (query = '') => {
    try {
      const response = await axios.get<{ results: Movie[] }>(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: 'daf4907c821b89c3d33d74dc38cf6bdc',
            query,
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Welcome to FILM_OS!</h1>
      <p>
        Log in:
        <Link to="/login">Login</Link>
      </p>
      <p>Don't have an account? <Link to="/register">Register here!</Link></p>
      <div className="home-page">
        <SearchBar onSearch={fetchMovies} />
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default Home;