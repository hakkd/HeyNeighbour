import dbPromise from "../../../../database/sqlite";

export default async function handler(req, res) {
  const db = await dbPromise;

  if (req.method === 'POST') {
    const { userid, title, description, jobType } = req.query;
    postalCode = await db.get('SELECT postalCode FROM users WHERE id = ?', [userid]);
    date = new Date().toISOString().split('T')[0];
    await db.run('INSERT INTO favours (title, description, createdBy, status, date, location, jobType) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [title, description, userid, "open", date, postalCode.postalCode, jobType]);
    res.status(200).json({message: 'Favour added'});
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}