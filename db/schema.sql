-- template below --
DROP DATABASE IF EXISTS play_listDB;

CREATE DATABASE play_listDB;

USE play_listDB;

CREATE TABLE songs (
id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Song", "Grimes", "Synth-Pop");

INSERT INTO songs (title, artist, genre)
VALUES ("Song", "Nirvana", "Grunge");

INSERT INTO songs (title, artist, genre)
VALUES ("song", "Guns and Roses", "Rock");
