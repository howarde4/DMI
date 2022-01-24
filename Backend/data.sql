DROP DATABASE IF EXISTS todosdb;

CREATE DATABASE todosdb;

\c todosdb;

DROP TABLE IF EXISTS todos;

CREATE TABLE todos
(
    id SERIAL PRIMARY KEY,
    todo text NOT NULL
);

INSERT INTO todos
    (todo)
VALUES 
    ('Walk dog');

INSERT INTO todos
    (todo)
VALUES  
    ('Take out trash');


