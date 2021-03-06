DROP TABLE IF EXISTS orders CASCADE;


CREATE TABLE orders (
 id SERIAL PRIMARY KEY NOT NULL,
 customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
 menu_id INTEGER REFERENCES menus(id) ON DELETE CASCADE,
 quantity INTEGER NOT NULL,
 cost_item DECIMAL(5, 2) NOT NULL,
 order_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE order_items (
--   id SERIAL PRIMARY KEY NOT NULL,
--   order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
--   menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
--   quantity SMALLINT NOT NULL DEFAULT 1
-- );
-- CREATE TABLE orders (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
--   total INT NOT NULL DEFAULT 0,
--   date TIMESTAMP,
--   status INTEGER
-- );
