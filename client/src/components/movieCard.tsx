// src/components/MovieCard.tsx
import React from 'react';

type MovieProps = {
  title: string;
  poster: string;
  releaseDate: string;
  overview: string;
};

const MovieCard: React.FC<MovieProps> = ({ title, poster, releaseDate, overview }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={`${title} poster`} />
      <h2>{title}</h2>
      <p><strong>Release Date:</strong> {releaseDate}</p>
      <p>{overview}</p>
    </div>
  );
};

export default MovieCard;
