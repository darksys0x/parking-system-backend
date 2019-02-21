DROP DATABASE IF EXISTS parking_db;
CREATE DATABASE parking_db;
\c parking_db


CREATE TABLE employee(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email varchar,
  phone int
);

INSERT INTO employee(name, email, phone) 
VALUES
('Hamad', 'Hamad@gmail.com', 0599187364),
('Trevor', 'Trevor@gmail.com', 0545298133);


CREATE TABLE parking_info(
    id SERIAL PRIMARY KEY,
    driver_name VARCHAR,
    type_car VARCHAR,
    plate_number VARCHAR,
    image VARCHAR,
    date_in DATE,
    date_out DATE,
    employee_id int NOT NULL,
    FOREIGN KEY(employee_id) REFERENCES employee ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO parking_info(driver_name, type_car, plate_number, image, date_in, date_out, employee_id) 
VALUES 
('Hamoud', 'Toyota', '5522ABC', 'Hi', '2019-2-20', '2019-2-20', 1),
('Khaled', 'Luxues', '9867ADD', 'Hi', '2019-2-18', '2019-2-19', 1),
('Fahad', 'BMW', '1962GTC', 'Hi', '2019-2-15', '2019-2-16', 2);
