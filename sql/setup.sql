-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS players CASCADE;
DROP TABLE IF EXISTS rooms CASCADE;
DROP TABLE IF EXISTS sketchers CASCADE;

CREATE TABLE players (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password_hash VARCHAR NOT NULL
);

INSERT INTO players (username, email, password_hash)
VALUES
('test_user', 'user@email.net', 'hunter2myhunter2'),
('test_user2', 'user@email.com', 'hunter2myhunter2'),
('test_user3', 'user@email.org', 'hunter2myhunter2');

CREATE TABLE rooms (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    owner_id BIGINT NOT NULL REFERENCES players(id),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO rooms (name, owner_id)
VALUES
('test_room', 1),
('test_room2', 2),
('test_room3', 3);