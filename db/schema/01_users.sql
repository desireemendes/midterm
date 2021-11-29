DROP TABLE IF EXISTS menus CASCADE;
CREATE TABLE menus (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  picture_url VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price decimal,
  active BOOLEAN
);




