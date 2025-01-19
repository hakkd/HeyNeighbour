import dbPromise from '../../../database/sqlite';

export default async function handler(req, res) {
  const db = await dbPromise;

  if (req.method === 'GET') {
    const { postalCode, jobType } = req.query;

    const helpers = await db.all(`
      SELECT users.id, users.name, users.email, users.postalCode, users.rating, helperInfo.jobTypes, helperInfo.hasCar, userImages.image
      FROM users
      JOIN userTypes ON users.id = userTypes.userId
      JOIN helperInfo ON users.id = helperInfo.userId
      LEFT JOIN userImages ON users.id = userImages.userId
      WHERE userTypes.type = 'helper' AND users.postalCode = ? AND helperInfo.jobTypes LIKE ?
      ORDER BY users.rating DESC
    `, [postalCode, `%${jobType}%`]);

    const helpersWithImages = helpers.map(helper => ({
        ...helper,
        image: helper.image ? Buffer.from(helper.image).toString('base64') : null,
      }));

    res.status(200).json(helpersWithImages);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}