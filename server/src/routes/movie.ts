import express from 'express';
import { Movie } from '../models/movie';

const app = express();

app.get('/api/movies', async (req, res) => {
  try {
    const result = await pool.query<Movie>('SELECT * FROM movies');
    const movies: Movie[] = result.rows;
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
