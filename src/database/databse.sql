CREATE DATABASE videogames;

CREATE TABLE VIDEOGAME(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
)

INSERT INTO VIDEOGAME(name, email)
VALUES ('Fifa 2020', 'fifa@support.com'),
        ('Mortal kombat X', 'mkx@subsero.com');