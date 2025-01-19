// heyneighbour/database/init.js
import dbPromise from './sqlite.js';

(async () => {
  const db = await dbPromise;
  await db.exec('DROP TABLE IF EXISTS users');
  await db.exec('DROP TABLE IF EXISTS reviews');
  await db.exec('DROP TABLE IF EXISTS favours');
  await db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT, country TEXT, postalCode TEXT, rating INTEGER)'); 
  await db.exec('INSERT INTO users (name, email, country, postalCode, rating) VALUES ("Alice", "alice@example.com", "Canada", "A1A 1A1", 5)');
  await db.exec('INSERT INTO users (name, email, country, postalCode, rating) VALUES ("John Doe", "john.doe@example.com", "Canada", "A1A 1A1", 3)');
  await db.exec('CREATE TABLE IF NOT EXISTS reviews (id INTEGER PRIMARY KEY, userId INTEGER, rating INTEGER, comment TEXT, createdBy INTEGER)');
  await db.exec('INSERT INTO reviews (userId, rating, comment, createdBy) VALUES (1, 5, "Great user", 2)');
  await db.exec('CREATE TABLE IF NOT EXISTS favours (id INTEGER PRIMARY KEY, userId INTEGER, title TEXT, description TEXT, createdBy INTEGER, status TEXT, date TEXT, assignedTo INTEGER, location TEXT)');
  await db.exec('INSERT INTO favours (userId, title, description, createdBy, status, date, assignedTo, location) VALUES (1, "Help with groceries", "I need help with groceries", 1, "open", "2021-01-01", 2, "A1A 1A1")');
  await db.exec('DROP TABLE IF EXISTS userTypes');
  await db.exec('CREATE TABLE IF NOT EXISTS userTypes (id INTEGER PRIMARY KEY, userId INTEGER, type TEXT)');
  await db.exec('INSERT INTO userTypes (userId, type) VALUES (2, "help seeker")');
  await db.exec('INSERT INTO userTypes (userId, type) VALUES (1, "helper")');
})();