DROP DATABASE IF EXISTS moviedb;
CREATE DATABASE moviedb;


\c moviedb;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  poster_path VARCHAR(255),
  release_date DATE,
  overview TEXT
);

