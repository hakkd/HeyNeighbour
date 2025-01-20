import dbPromise from '../../../database/sqlite';
import { serialize } from 'cookie'
import { encrypt } from '../../app/session'

export default async function handler(req, res) {
  const sessionData = req.body
  const encryptedSessionData = encrypt(sessionData)
  const db = await dbPromise;

  const cookie = serialize('session', encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  })
  res.setHeader('Set-Cookie', cookie)
  res.status(200).json({ message: 'Successfully set cookie!' })

  if (req.method === 'GET') {
    const users = await db.all('SELECT * FROM users');
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { name, email, postalcode, phonenumber, usertype} = req.body;
    await db.run('INSERT INTO users (name, email, postalcode, phoneNumber) VALUES (?, ?, ?, ?)', [name, email, postalcode, phonenumber]);
    await db.run('INSERT INTO userTypes (userId, type) VALUES ((SELECT id FROM users WHERE email = ?), ?)', [email, usertype]);
    res.status(201).json({ message: 'User added' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}