import dbPromise from '../../../database/sqlite';

export default async function handler(req, res) {
  const db = await dbPromise;

  if (req.method === 'GET') {
    const users = await db.all('SELECT * FROM users');
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { name, email, postalcode, usertype} = req.body;
    await db.run('INSERT INTO users (name, email, postalcode) VALUES (?, ?, ?)', [name, email, postalcode]);
    await db.run('INSERT INTO userTypes (userId, type) VALUES ((SELECT id FROM users WHERE email = ?), ?)', [email, usertype]);
    res.status(201).json({ message: 'User added' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}