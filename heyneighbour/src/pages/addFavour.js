import React, { useState } from 'react';
import {useRouter} from 'next/navigation';

const AddFavour = () => {
    const [favour, setFavour] = useState({
        title: '',
        description: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFavour({
            ...favour,
            [name]: value,
        });
    };

    const Router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Favour submitted:', favour);
        // redirect to the helpers page and pass favour params
        Router.push({
            pathname: '/helpers',
            query: { favour: JSON.stringify(favour) },
        });
    };

    return (
        <div>
            <h1>Add a New Favour</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={favour.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={favour.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={favour.date}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Add Favour</button>
            </form>
        </div>
    );
};

export default AddFavour;