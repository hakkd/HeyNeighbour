import React, { useState, useEffect } from 'react';

const UserFavours = () => {
    const [favours, setFavours] = useState([]);

    useEffect(() => {
        async function fetchFavours() {
            const response = await fetch('/api/userFavours');
            const data = await response.json();
            setFavours(data);
        }

        fetchFavours();
    }, []);

    return (
        <div>
            <h1>Your Assigned Tasks</h1>
            <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                <ul>
                    {favours.map(favour => (
                        <li key={favour.id}>
                            <h2>{favour.title}</h2>
                            <p>{favour.description}</p>
                            <p>Date: {new Date(favour.date).toLocaleDateString()}</p>
                            <p>Job Type: {favour.jobType}</p>
                            <p>Created by: {favour.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default UserFavours;