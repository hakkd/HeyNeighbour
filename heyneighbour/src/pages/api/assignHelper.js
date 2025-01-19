import dbPromise from '../../../database/sqlite';

export default async function assignHelper(req, res) {
    if (req.method === 'POST') {
        console.log(req.body)
        const { helperId } = req.body.helperId;
        const { favour } = req.body.favour;
        
        if (!helperId) {
            return res.status(400).json({ error: 'Helper ID is required' });
        }

        if (!favour) {
            return res.status(400).json({ error: 'Favour information is required' });
        }

        try {
            const result = await assignHelperToTask(helperId, favour);

            return res.status(200).json({ success: true, data: result });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to assign helper' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
}

async function assignHelperToTask(helperId, favour) {
    // Implement your logic to assign the helper to a task
    // This is a placeholder function
    const db = await dbPromise;
    const { title, description, date, jobType } = favour;
    postalCode = await db.get('SELECT postalCode FROM users WHERE id = ?', [helperId]);
    date = new Date().toISOString().split('T')[0];
    await db.run('INSERT INTO favours (title, description, createdBy, status, date, jobType) VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING id', [title, description, helperId, "assigned", date, jobType]);
    return { helperId, taskId: 'exampleTaskId' };
}