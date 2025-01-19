// heyneighbour/database/init.js
import dbPromise from './sqlite.js';
import fs from 'fs';

(async () => {
  const db = await dbPromise;
  await db.exec('DROP TABLE IF EXISTS users');
  await db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT, country TEXT, postalCode TEXT, rating INTEGER)'); 
  await db.exec('INSERT INTO users (name, email, country, postalCode, rating) VALUES ("Alice", "alice@example.com", "Canada", "A1A 1A1", 5)');
  await db.exec('INSERT INTO users (name, email, country, postalCode, rating) VALUES ("John Doe", "john.doe@example.com", "Canada", "A1A 1A1", 3)');

  await db.exec('DROP TABLE IF EXISTS userImages');
  await db.exec('CREATE TABLE IF NOT EXISTS userImages (id INTEGER PRIMARY KEY, userId INTEGER, image BLOB)');
  const image1 = fs.readFileSync('user_images/image1.jpg');
  const image2 = fs.readFileSync('user_images/image2.jpg');
  await db.run('INSERT INTO userImages (userId, image) VALUES (?, ?)', [1, image1]);
  await db.run('INSERT INTO userImages (userId, image) VALUES (?, ?)', [2, image2]);

  await db.exec('DROP TABLE IF EXISTS reviews');
  await db.exec('CREATE TABLE IF NOT EXISTS reviews (id INTEGER PRIMARY KEY, userId INTEGER, rating INTEGER, comment TEXT, createdBy INTEGER)');
  await db.exec('INSERT INTO reviews (userId, rating, comment, createdBy) VALUES (1, 5, "Great user", 2)');

  await db.exec('DROP TABLE IF EXISTS favours');
  await db.exec('CREATE TABLE IF NOT EXISTS favours (id INTEGER PRIMARY KEY, userId INTEGER, title TEXT, description TEXT, createdBy INTEGER, status TEXT, date TEXT, assignedTo INTEGER, location TEXT, jobType TEXT)');
  await db.exec('INSERT INTO favours (userId, title, description, createdBy, status, date, assignedTo, location, jobType) VALUES (1, "Help with groceries", "I need help with groceries", 1, "open", "2021-01-01", 2, "A1A 1A1", "shopping")');
  
  await db.exec('DROP TABLE IF EXISTS userTypes');
  await db.exec('CREATE TABLE IF NOT EXISTS userTypes (id INTEGER PRIMARY KEY, userId INTEGER, type TEXT)');
  await db.exec('INSERT INTO userTypes (userId, type) VALUES (2, "help seeker")');
  await db.exec('INSERT INTO userTypes (userId, type) VALUES (1, "helper")');
  
  await db.exec('DROP TABLE IF EXISTS messages');
  await db.exec('CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, fromId INTEGER, toId INTEGER, message TEXT, date TEXT)');
  await db.exec('INSERT INTO messages (fromId, toId, message, date) VALUES (1, 2, "Hello", "2021-01-01")');
  await db.exec('INSERT INTO messages (fromId, toId, message, date) VALUES (2, 1, "Hi", "2021-01-01")');
  
  await db.exec('DROP TABLE IF EXISTS helperInfo');
  await db.exec('CREATE TABLE IF NOT EXISTS helperInfo (id INTEGER PRIMARY KEY, userId INTEGER, jobTypes TEXT, hasCar BOOLEAN)');
  await db.exec('INSERT INTO helperInfo (userId, jobTypes, hasCar) VALUES (1, "manual labour, driving", true)');
  await db.exec('INSERT INTO helperInfo (userId, jobTypes, hasCar) VALUES (2, "handyperson, companionship", false)');

  console.log('Database initialized');
})();