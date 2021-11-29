DROP TABLE IF EXISTS orders CASCADE;


CREATE TABLE orders (
 id SERIAL PRIMARY KEY NOT NULL,
 customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
 menu_id INTEGER REFERENCES menus(id) ON DELETE CASCADE,
 quantity INTEGER NOT NULL,
 cost_item DECIMAL(5, 2) NOT NULL,
 order_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);