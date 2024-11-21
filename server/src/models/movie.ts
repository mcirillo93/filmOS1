// backend/src/models/Movie.ts
import { Pool } from 'pg';

const pool = new Pool();

export interface Movie {
    id: number; // Primary key
    title: string; // Movie title
    poster_path?: string; // Poster URL
    release_date: string; // Release date
    overview: string; // Description
  }
  const getMovies = async (): Promise<Movie[]> => {
    const result = await pool.query<Movie>('SELECT * FROM movies');
    return result.rows;
  };

  // Example call to getMovies function
  getMovies().then(movies => console.log(movies)).catch(err => console.error(err));
  