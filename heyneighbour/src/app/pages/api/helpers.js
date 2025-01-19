import dbPromise from '../../../database/sqlite';

export default async function handler(req, res) {
  const db = await dbPromise;

  if (req.method === 'GET') {
    const { postalCode, jobType } = req.query;

    const helpers = await db.all(`
      SELECT users.id, users.name, users.email, users.postalCode, helperDetails.jobTypes, helperDetails.hasCar
      FROM users
      JOIN userTypes ON users.id = userTypes.userId
      JOIN helperDetails ON users.id = helperDetails.userId
      WHERE userTypes.type = 'helper' AND users.postalCode = ? AND helperDetails.jobTypes LIKE ?
      ORDER BY users.rating DESC
    `, [postalCode, `%${jobType}%`]);

    res.status(200).json(helpers);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}