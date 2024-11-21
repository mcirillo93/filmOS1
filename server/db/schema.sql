CREATE DATABASE moviedb;

\c moviedb;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  poster_path VARCHAR(255),
  release_date DATE,
  overview TEXT
);
const getMovies = async (): Promise<Movie[]> => {
  const result = await pool.query<Movie>('SELECT * FROM movies');
  return result.rows;
};
const createMovie = async (movie: Movie): Promise<Movie> => {
  const result = await pool.query<Movie>(
    'INSERT INTO movies (title, poster_path, release_date, overview) VALUES ($1, $2, $3, $4) RETURNING *',
    [movie.title, movie.poster_path, movie.release_date, movie.overview]
  );
  return result.rows[0];
};
