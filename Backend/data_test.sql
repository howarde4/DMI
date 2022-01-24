DROP DATABASE IF EXISTS todosdb_test;

CREATE DATABASE todosdb_test;

\c todosdb_test;

DROP TABLE IF EXISTS todos;

CREATE TABLE todos
(
    id SERIAL PRIMARY KEY,
    todo text NOT NULL
);



