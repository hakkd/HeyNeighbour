import { getSession } from 'next-auth/react';
import dbPromise from '../../../database/sqlite';

export default async function handler(req, res) {
    const db = await dbPromise;
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const favours = await db.all(`
            SELECT favours.id, favours.title, favours.description, favours.date, favours.jobType, users.name FROM favours 
            JOIN users ON users.id = favours.userID
            WHERE assignedTo = ?`, [session.user.id]);
        res.status(200).json(favours);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}