CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(20) NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  register_date DATE
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY NOT NULL,
  content VARCHAR(500) NOT NULL,
  url VARCHAR(200) NOT NULL,
  user_id INTEGER NOT NULL,
  post_date DATE
);
