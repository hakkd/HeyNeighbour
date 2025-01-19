// heyneighbour/database/init.js
import dbPromise from './sqlite.js';

(async () => {
  const db = await dbPromise;
  await db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT, country TEXT, postalCode TEXT, rating INTEGER)'); 
  await db.exec('INSERT INTO users (name, email, country, postalCode, rating) VALUES ("Alice", "alice@example.com", "Canada", "A1A 1A1", 5)');
})();