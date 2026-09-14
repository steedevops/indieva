-- Migration 001
-- Baseline du modèle relationnel Indieva : creators + products

BEGIN;

CREATE TABLE creators (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE products (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC NOT NULL,
    stock INTEGER NOT NULL,
    creator_id INTEGER NOT NULL,

    CONSTRAINT products_price_positive CHECK (price > 0),
    CONSTRAINT products_stock_nonnegative CHECK (stock >= 0),
    CONSTRAINT products_creator_fk
        FOREIGN KEY (creator_id)
        REFERENCES creators(id)
);

COMMIT;