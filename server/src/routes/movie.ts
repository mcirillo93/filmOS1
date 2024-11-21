import express from 'express';
import { Movie } from '../models/movie';
import { Pool } from 'pg'; // Adjust the import path as necessary

const app = express();

app.get('/api/movies', async (_, res) => {
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






const pool = new Pool({

  user: 'your_db_user',

  host: 'your_db_host',

  database: 'your_db_name',

  password: 'your_db_password',

  port: 5432, // or your database port

});



export { pool };
