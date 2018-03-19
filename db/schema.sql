-- template below --
DROP DATABASE IF EXISTS fighters_listDB;

CREATE DATABASE fighters_listDB;

USE fighters_listDB;

CREATE TABLE fighters (
id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NULL,
  hp INTEGER(3) NULL,
  attack INTEGER(2) NULL,
  defense INTEGER(2) NULL,
  special VARCHAR(45) NULL,
  backstory VARCHAR(200) NULL,
  PRIMARY KEY (id)
);

INSERT INTO fighters (name, hp, attack, defense, special, backstory)
VALUES ("", "", "", "", "", "",); -- can't remember; different syntax with ints?
