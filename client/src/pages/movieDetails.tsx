// src/pages/MovieDetails.tsx
  // (AJ) Typed API Response Here: 
import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MovieDetailsInterface } from '../components/types';    // (AJ) Imported MovieDetails type Here: 

const MovieDetails: React.FC = () => {
  //const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailsInterface | null>(null);

  const fetchMovieDetails = async (movieId: string) => {
    try {
      const response = await axios.get<MovieDetailsInterface>(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: 'daf4907c821b89c3d33d74dc38cf6bdc',
        },
      });
      setMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  useEffect(() => {
    const movieId = 'some_movie_id'; // (AJ) Replace with actual movie ID
    fetchMovieDetails(movieId);
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {/* Render other movie details as needed */}
    </div>
  );
};

export default MovieDetails;