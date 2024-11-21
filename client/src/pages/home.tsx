// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/searchBar';   // (AJ): Corrected Import Path
import MovieList from '../components/movieList';  // (AJ): Corrected Import Path
// import { Movie } from '../components/types';    // (AJ): Movie Types Link Imported Here: 


const Home: React.FC = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query = '') => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: 'daf4907c821b89c3d33d74dc38cf6bdc',
        query,
      },
    });
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="home-page">
      <SearchBar onSearch={fetchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
