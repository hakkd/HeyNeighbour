import dbPromise from '../../../database/sqlite';

export default async function handler(req, res) {
  const db = await dbPromise;

  if (req.method === 'GET') {
    const { postalCode } = req.query;
    const favours = await db.all('SELECT * FROM favours WHERE status = "open" AND postalCode = ?', [postalCode]);
    res.status(200).json(favours);
  } else if (req.method === 'POST') {
    const { favorId, userId } = req.body;
    await db.run('UPDATE favors SET status = "accepted", userId = ? WHERE id = ?', [userId, favorId]);
    res.status(200).json({ message: 'Favor accepted' });
  } else if (req.method === 'PUT') {
    const { favorId } = req.body;
    await db.run('UPDATE favors SET status = "open", userId = NULL WHERE id = ?', [favorId]);
    res.status(200).json({ message: 'Favor canceled' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}