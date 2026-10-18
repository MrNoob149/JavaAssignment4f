-- You can replace 'wskcats' with your desired database name
DROP DATABASE IF EXISTS cat;
CREATE DATABASE cat;
USE cat;

-- Replace 'myusername' and 'mypassword' with your desired username and password (DO NOT USE YOUR METROPOLIA CREDENTIALS)
CREATE USER ' testing'@'localhost' IDENTIFIED BY '12345678';
GRANT ALL PRIVILEGES ON `cat`.* TO 'testing'@'localhost';
FLUSH PRIVILEGES;

