CREATE DATABASE IF NOT EXISTS
    databasedocker;
USE databasedocker;

CREATE TABLE IF NOT EXISTS products (
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    PRIMARY KEY (id)
);

INSERT INTO products VALUE(0, 'Celular', 2500);
INSERT INTO products VALUE(0, 'Cadeira', 300);
INSERT INTO products VALUE(0, 'Livro', 50);