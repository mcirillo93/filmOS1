// src/pages/MovieDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

type MovieDetails = {
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
};

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: { api_key: 'daf4907c821b89c3d33d74dc38cf6bdc' },
      });
      setMovie(response.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
