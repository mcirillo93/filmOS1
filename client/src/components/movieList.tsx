// src/components/MovieList.tsx
import React from 'react';
import MovieCard from './movieCard';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
};

type MovieListProps = {
  movies: Movie[];
};

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          releaseDate={movie.release_date}
          overview={movie.overview}
        />
      ))}
    </div>
  );
};

export default MovieList;
