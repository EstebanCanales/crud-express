CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) VALUES ( 'John Doe', 'johndoe@gmail.com' );

CREATE TABLE items (
  id serial PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO items (name, description) VALUES ( 'CocaCola', 'Lorem ipsum' );

CREATE TABLE company (
  id serial PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company_user VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  number INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO company (name, company_user, password, number) VALUES ( 'CocaCola', 'User 1', 'mypassword', '1234568' );

CREATE TABLE green_product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  expire_date VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  price INT NOT NULL, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO green_product (name,  expire_date, type, price) VALUES ('Lechugas', '14/12', 'Verdura', '3000' );


