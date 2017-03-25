DROP DATABASE IF EXISTS todo;
CREATE DATABASE todo;

\c todo

DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
  ID SERIAL PRIMARY KEY,
  assignment VARCHAR,
  notes VARCHAR,
  iscomplete BOOLEAN DEFAULT false
);

DROP TABLE IF EXISTS songs;
CREATE TABLE songs (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  artist VARCHAR,
  url VARCHAR,
  cover_art_url VARCHAR
);
