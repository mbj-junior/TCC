sudo mysql -h localhost -u root -p

CREATE DATABASE oumeajuda_db;

CREATE USER 'oumeajuda'@'localhost' IDENTIFIED BY 'oumeajuda';
GRANT ALL PRIVILEGES ON * . * TO 'oumeajuda'@'localhost';
FLUSH PRIVILEGES;
ALTER USER 'oumeajuda'@'localhost' IDENTIFIED WITH mysql_native_password BY 'oumeajuda';
FLUSH PRIVILEGES;


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

INSERT INTO oumeajuda_db.user (name, lastname, type, phone, created_at) VALUES ('José', 'Aquiles', 'P', 12987456321, DEFAULT);
INSERT INTO oumeajuda_db.user (name, lastname, type, phone, created_at) VALUES ('Maria', 'Joaquina', 'A', 45986875641, DEFAULT);
INSERT INTO oumeajuda_db.user (name, lastname, type, phone, created_at) VALUES ('Tereza', 'Marques', 'A', 89965472335, DEFAULT);
INSERT INTO oumeajuda_db.user (name, lastname, type, phone, created_at) VALUES ('Claúdio', 'Segundo', 'A', 81987456325, DEFAULT);

CREATE TABLE IF NOT EXISTS help (
help_id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100) NOT NULL,
description VARCHAR(700) NOT NULL,
user_id INT NOT NULL,
allow_phone_number BOOLEAN NOT NULL,
phone_number bigint null,
professor_id INT,
language_id INT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
accepted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
closed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES user (user_id),
FOREIGN KEY (professor_id) REFERENCES user (user_id),
FOREIGN KEY (language_id) REFERENCES language (language_id)
);


INSERT INTO oumeajuda_db.help (title, description, user_id, allow_phone_number, professor_id, language_id, created_at, accepted_at, closed_at, phone_number) VALUES ('Não entendo orientação à Objetos', 'Estou com dificuldades em entender orientação a objetos utilizando linguagem Java.', 1, 0, null, 1, '2020-12-21 18:05:04', '2020-12-21 18:05:04', '2020-12-21 18:05:04', 19986599932);
INSERT INTO oumeajuda_db.help (title, description, user_id, allow_phone_number, professor_id, language_id, created_at, accepted_at, closed_at, phone_number) VALUES ('Express', 'Não consegui utiliza o express para criar os endpoints', 1, 0, null, 3, '2020-12-21 18:07:36', '2020-12-21 18:07:36', '2020-12-21 18:07:36', 12968733256);

CREATE TABLE IF NOT EXISTS login(
  user_id int NOT NULL,
  email varchar(100) NOT NULL,
  psw varchar(255) NOT NULL,
  PRIMARY KEY (user_id),
  CONSTRAINT login_ibfk_1 FOREIGN KEY (user_id) REFERENCES user (user_id)
);