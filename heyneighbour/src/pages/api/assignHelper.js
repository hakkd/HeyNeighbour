import dbPromise from '../../../database/sqlite';

export default async function assignHelper(req, res) {
    if (req.method === 'POST') {
        console.log(req.body)
        const {  helperId, title, description, date, jobType } = req.body;
        
        if (!helperId) {
            return res.status(400).json({ error: 'Helper ID is required' });
        }

        try {
            const result = await assignHelperToTask(helperId, title, description, date, jobType);

            return res.status(200).json({ success: true, data: result });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to assign helper' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
}

async function assignHelperToTask(helperId, title, description, date, jobType) {
    // Implement your logic to assign the helper to a task
    // This is a placeholder function
    console.log('Assigning helper to task:', helperId, title, description, date, jobType);
    const db = await dbPromise;
    await db.run('INSERT INTO favours (title, description, createdBy, status, date, jobType) VALUES (?, ?, ?, ?, ?, ?)', [title, description, helperId, "assigned", date, jobType]);
    return { helperId, favour };
}