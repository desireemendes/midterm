INSERT INTO customers (name, email, phone_number, password)
VALUES
('Eva Stanley', 'sebastianguerra@ymail.com', '+3679386348', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO customers (name, email, phone_number, password)
VALUES
('Louisa Meyer', 'louisameyer@ymail.com', '+9054559045', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO customers (name, email, phone_number, password)
VALUES
('Leroy Hart', 'leroy@ymail.com', '+5890294021', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO customers (name, email, phone_number, password)
VALUES
('Matilda Smith', 'msmith@ymail.com', '+4559056789', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO customers (name, email, phone_number, password)
VALUES
('Dominic Parks', 'domi@ymail.com', '+6778934596', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO customers (name, email, phone_number, password)
VALUES
('Lisa Rose', 'roselisa@ymail.com', '+9034560978', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO customers (name, email, phone_number, password)
VALUES
('Mason Morrison', 'mm@ymail.com', '+4982576903', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO customers (name, email, phone_number, password)
VALUES
('Sue Luna', 'sueluna@ymail.com', '+9034962356', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO customers (name, email, phone_number, password)
VALUES
('Moe Westt', 'mwest@ymail.com', '+5492054389', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO customers (name, email, phone_number, password)
VALUES
('Margaret Wong', 'margaretwong@ymail.com', '+4556782398', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO menus (id, picture_url, name, description, price, active)
VALUES (1, 'https://images.app.goo.gl/ah3seX84CfsxhZ5e6', 'Samosa', 'Triangle shaped pastries filled with onions, peas and a variety of Indian spices with your choice of potato, lentils, chicken or beef filling', 4.99, true);

INSERT INTO menus (id, picture_url, name, description, price, active)
VALUES (3, 'https://images.app.goo.gl/wVrXwLfoPqCzUDcc6', 'Vegetable Pakoras', 'Cauliflower, cabbage, potato, spinach and onion mixed with a chickpea batter and deep-fried in vegetable oil', 3.99, true);

INSERT INTO menus (id, picture_url, name, description, price, active)
VALUES (5, 'https://images.app.goo.gl/oX54LrLKanBnE9cE9', 'Tandoori Chicken Wings', 'Chicken wings marinated in yogurt, garlic, ginger and spices & cooked in our clay oven', 6.99, true);

INSERT INTO menus (id, picture_url, name, description, price, active)
VALUES (7, 'https://images.app.goo.gl/i4qJgsuMc8fVBVvDA', 'Fish Pakora', 'Breaded fillets of fresh basa seasoned with Indian spices', 6.99, true);

INSERT INTO menus (id, picture_url, name, description, price, active)
VALUES (9, 'https://images.app.goo.gl/rSs1prVruyBtp3Zx5', 'Biriyani(Vegetables/Paneer/Chicken, Lamb, Prawn or Beef)', 'Saffron rice cooked with vegetables/paneer/chicken/lamb/beef/prawns with whole spices, almonds, cashews, and dairy', 20, true);

INSERT INTO menus (id, picture_url, name, description, price, active)
VALUES (2, 'https://images.app.goo.gl/FeaaqzJYMLq4ZUdA6', 'Kadai Paneer', 'Homemade cheese cooked with whole spices, onions, green and red bell peppers', 14.99, true);

INSERT INTO menus (id, picture_url, name, description, price, active)
VALUES (4, 'https://images.app.goo.gl/XwaudvhZJny5fTvJ6', 'Butter Chicken', 'Deboned tandoori chicken cooked in a tomato and cream based sauce', 17.49, true);

INSERT INTO menus (id, picture_url, name, description, price, active)
VALUES (6, 'https://images.app.goo.gl/38MnKozcgePcNuBC7', 'Ras Malai', 'Soft Indian homemade cheese cooked in syrup topped with a creamy sauce and a sprinkle of nuts', 8.59, true);

INSERT INTO menus (id, picture_url, name, description, price, active)
VALUES (8, 'https://images.app.goo.gl/DC3rp8HAvKiGHPKV6', 'Kulfi (Mango/Pistachio/Almond)', 'Homemade Indian ice cream on a stick, garnished with nut', 4.5, true);

INSERT INTO menus (id, picture_url, name, description, price, active)
VALUES (10, 'https://images.app.goo.gl/H3aTHtE9zcM4ZQ4r9 ', 'Masala Chai', 'Black tea infused with fragrant spices, typically served with milk', 3.5, true);

INSERT INTO orders (customer_id, menu_id, quantity, cost_item, order_time)
VALUES (1, 2, 2, 450.00, '2021-11-28 13:10:00.208497+07');
INSERT INTO orders (customer_id, menu_id,quantity, cost_item, order_time)
VALUES (2, 3, 1, 150.00,  '2021-11-28 12:10:00.208497+07');
INSERT INTO orders (customer_id, menu_id,quantity, cost_item, order_time)
VALUES (3, 5, 3, 550.00, '2021-11-28 05:10:00.208497+07');
INSERT INTO orders (customer_id, menu_id,quantity, cost_item, order_time)
VALUES (4, 4, 2, 400.00, '2021-11-28 04:00:00.208497+07');
INSERT INTO orders (customer_id, menu_id,quantity, cost_item, order_time)
VALUES (7, 6, 5, 900.00, '2021-11-28 06:10:00.208497+07');
INSERT INTO orders (customer_id, menu_id,quantity, cost_item, order_time)
VALUES (5, 3, 2, 350.00, '2021-11-28 07:10:00.208497+07');
INSERT INTO orders (customer_id, menu_id,quantity, cost_item, order_time)
VALUES (8, 7, 1, 40.00, '2021-11-28 09:10:00.208497+07');
INSERT INTO orders (customer_id, menu_id,quantity, cost_item, order_time)
VALUES (9, 8, 3, 470.00, '2021-11-28 13:10:00.208497+07');
INSERT INTO orders (customer_id, menu_id,quantity, cost_item, order_time)
VALUES (5, 4, 1, 150.00, '2021-11-28 11:10:00.208497+07');
INSERT INTO orders (customer_id, menu_id,quantity, cost_item, order_time)
VALUES (9, 2, 2, 450.00, '2021-11-28 12:10:00.208497+07');


INSERT INTO status (customer_id, order_id, menu_id, pickup_time, total_cost)
VALUES
(1, 5, 3, '2021-12-03 3:45', 12.99);
INSERT INTO status (customer_id, order_id, menu_id, pickup_time, total_cost)
VALUES
(2, 4, 6, '2021-12-03 8:43', 3.99);
INSERT INTO status (customer_id, order_id, menu_id, pickup_time, total_cost)
VALUES
(5, 1, 5, '2021-12-05 10:43', 10);
INSERT INTO status (customer_id, order_id, menu_id, pickup_time, total_cost)
VALUES
(8, 2, 9, '2021-12-21 9:20', 12);
INSERT INTO status (customer_id, order_id, menu_id, pickup_time, total_cost)
VALUES
(1, 3, 7, '2021-12-22 14:30', 9);
INSERT INTO status (customer_id, order_id, menu_id, pickup_time, total_cost)
VALUES
(3, 7, 4, '2021-12-15 10:43', 13);
INSERT INTO status (customer_id, order_id, menu_id, pickup_time, total_cost)
VALUES
(7, 3, 2, '2021-12-18 15:22', 11);
INSERT INTO status (customer_id, order_id, menu_id, pickup_time, total_cost)
VALUES
(9, 9, 9, '2021-12-28 19:55', 15);
INSERT INTO status (customer_id, order_id, menu_id, pickup_time, total_cost)
VALUES
(5, 4, 6, '2021-12-24 17:01', 10.5);
INSERT INTO status (customer_id, order_id, menu_id, pickup_time, total_cost)
VALUES
(7, 3, 8, '2021-12-17 12:30', 8);

