CREATE DATABASE oumeajuda_db;
USE oumeajuda_db;

CREATE TABLE IF NOT EXISTS language (
language_id INT AUTO_INCREMENT PRIMARY KEY,
language_name VARCHAR (50) NOT NULL
);

insert into language(language_name) values ('JAVA');
insert into language(language_name) values ('JAVA SCRIPT');
insert into language(language_name) values ('NODE JS');

CREATE TABLE IF NOT EXISTS user(
user_id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
lastname VARCHAR(100) NOT NULL,
type VARCHAR(1) NOT NULL,
phone BIGINT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO oumeajuda_db.user (name, lastname, type, phone, created_at) VALUES ('José', 'Aquiles', 'P', 12987456321, DEFAULT)
INSERT INTO oumeajuda_db.user (name, lastname, type, phone, created_at) VALUES ('Maria', 'Joaquina', 'A', 45986875641, DEFAULT)
INSERT INTO oumeajuda_db.user (name, lastname, type, phone, created_at) VALUES ('Tereza', 'Marques', 'A', 89965472335, DEFAULT)
INSERT INTO oumeajuda_db.user (name, lastname, type, phone, created_at) VALUES ('Claúdio', 'Segundo', 'A', 81987456325, DEFAULT)

drop table help;
CREATE TABLE IF NOT EXISTS help (
help_id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100) NOT NULL,
description VARCHAR(700) NOT NULL,
user_id INT NOT NULL,
allow_phone_number BOOLEAN NOT NULL,
professor_id INT,
language_id INT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
accepted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
closed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES user (user_id),
FOREIGN KEY (professor_id) REFERENCES user (user_id),
FOREIGN KEY (language_id) REFERENCES language (language_id)
);

CREATE TABLE IF NOT EXISTS login(
user_id INT,
email VARCHAR(100) NOT NULL,
psw VARCHAR(255) NOT NULL,
PRIMARY KEY (user_id),    
FOREIGN KEY (user_id) REFERENCES user (user_id)
);