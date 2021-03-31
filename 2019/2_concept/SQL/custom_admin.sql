DROP DATABASE IF EXISTS custom;
CREATE DATABASE custom;

USE custom;

DROP TABLE IF EXISTS Category;
DROP TABLE IF EXISTS Subcategory;
DROP TABLE IF EXISTS View;
DROP TABLE IF EXISTS Image;
DROP TABLE IF EXISTS Checkout;
DROP TABLE IF EXISTS Detail;
DROP TABLE IF EXISTS Spec;
DROP TABLE IF EXISTS Cart;
DROP TABLE IF EXISTS Address;
DROP TABLE IF EXISTS Product;
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Admin;

CREATE TABLE Admin (
    admin_id INT(8) PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(60) NOT NULL,
    lname VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL UNIQUE,
    phone VARCHAR(20) UNIQUE,
    pass  VARCHAR(60) NOT NULL
);


CREATE TABLE User (
  user_id INT(8) PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(60) NOT NULL,
  lname VARCHAR(60) NOT NULL,
  email VARCHAR(60) NOT NULL UNIQUE,
  phone VARCHAR(20) NOT NULL UNIQUE,
  pass  VARCHAR(60) NOT NULL
);

CREATE TABLE Address (
  address_id INT(8) PRIMARY KEY AUTO_INCREMENT,
  address1 TEXT,
  address2 TEXT,
  city VARCHAR(60) NOT NULL,
  user_id INT UNIQUE NOT NULL,
  FOREIGN KEY (user_id)
        REFERENCES User(user_id)
        ON DELETE CASCADE
);

CREATE TABLE Cart (
    cart_id INT(8) PRIMARY KEY AUTO_INCREMENT,
    products JSON,
    total FLOAT NOT NULL DEFAULT 0,
    user_id INT UNIQUE NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES User(user_id)
        ON DELETE CASCADE
);

CREATE TABLE Product (
  product_id INT(8) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(60) NOT NULL,
  category VARCHAR(60) NOT NULL,
  price FLOAT NOT NULL,
  base_price FLOAT NOT NULL,
  admin_id INT NOT NULL,
  created DATETIME NOT NULL,
  updated DATETIME NOT NULL,
  FOREIGN KEY (admin_id)
    REFERENCES Admin(admin_id)
);

CREATE TABLE Image (
    image_id INT(8) PRIMARY KEY AUTO_INCREMENT,
    image VARCHAR(255) NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (product_id)
        REFERENCES Product(product_id)
        ON DELETE CASCADE
);

CREATE TABLE Detail (
  detail_id INT(8) PRIMARY KEY AUTO_INCREMENT,
  text TEXT,
  product_id INT,
  FOREIGN KEY (product_id)
    REFERENCES Product(product_id)
    ON DELETE CASCADE
);

CREATE TABLE Spec (
  spec_id INT(8) PRIMARY KEY AUTO_INCREMENT,
  text JSON,
  product_id INT,
  FOREIGN KEY (product_id)
    REFERENCES Product(product_id)
    ON DELETE CASCADE
);

CREATE TABLE Quantity (
    quantity_id INT(8) PRIMARY KEY AUTO_INCREMENT,
    quantity INT NOT NULL DEFAULT 0.00,
    created DATETIME NOT NULL,
    updated DATETIME NOT NULL,
    product_id INT(8) UNIQUE NOT NULL,
    FOREIGN KEY (product_id)
        REFERENCES Product(product_id)
        ON DELETE CASCADE
);

CREATE TABLE View (
    view_id INT(8) PRIMARY KEY AUTO_INCREMENT,
    ip VARCHAR(255) NOT NULL,
    view INT NOT NULL,
    created DATETIME NOT NULL,
    product_id INT,
    FOREIGN KEY (product_id)
        REFERENCES Product(product_id)
        ON DELETE CASCADE
);

CREATE TABLE Category (
    category_id INT(8) UNIQUE AUTO_INCREMENT,
    name VARCHAR(150) PRIMARY KEY NOT NULL
);

CREATE TABLE Subcategory (
    subcategory_id INT(8) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    category_name VARCHAR(150) NOT NULL,
    FOREIGN KEY (category_name)
        REFERENCES Category(name)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE Checkout (
    checkout_id INT(8) PRIMARY KEY AUTO_INCREMENT,
    products JSON NOT NULL,
    user_id INT NOT NULL,
    total FLOAT NOT NULL DEFAULT 0,
    address JSON,
    created DATETIME NOT NULL,
    updated DATETIME NOT NULL,
    active BOOLEAN,
    FOREIGN KEY (user_id)
       REFERENCES User(user_id)
);