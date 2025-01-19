import dbPromise from '../../../database/sqlite';

export default async function handler(req, res) {
  const db = await dbPromise;

  if (req.method === 'GET') {
    const { postalCode } = req.query;
    const favours = await db.all('SELECT * FROM favours WHERE status = "open" AND postalCode = ?', [postalCode]);
    res.status(200).json(favours);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}