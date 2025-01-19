import { useEffect, useState } from 'react';

export default function Favours({ postalCode }) {
  const [favours, setfavours] = useState([]);

  useEffect(() => {
    async function fetchfavours() {
      const response = await fetch(`/api/favours?postalCode=${postalCode}`);
      const data = await response.json();
      setfavours(data);
    }

    fetchfavours();
  }, [postalCode]);

  const handleAccept = async (favorId) => {
    await fetch('/api/favors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favorId, userId }),
    });
    setFavors((prevFavors) =>
      prevFavors.map((favor) =>
        favor.id === favorId ? { ...favor, status: 'accepted', userId } : favor
      )
    );
  };

  const handleCancel = async (favorId) => {
    await fetch('/api/favors', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favorId }),
    });
    setFavors((prevFavors) =>
      prevFavors.map((favor) =>
        favor.id === favorId ? { ...favor, status: 'open', userId: null } : favor
      )
    );
  };

  return (
    <div>
      <h1>Open Favors in Your Area</h1>
      <ul>
        {favors.map((favor) => (
          <li key={favor.id}>
            <h2>{favor.title}</h2>
            <p>{favor.description}</p>
            {favor.status === 'open' ? (
              <button onClick={() => handleAccept(favor.id)}>Accept</button>
            ) : favor.userId === userId ? (
              <button onClick={() => handleCancel(favor.id)}>Cancel</button>
            ) : (
              <p>Accepted by another user</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// This function gets called at build time
export async function getServerSideProps(context) {
  // Fetch the current user's postal code from your authentication system
  const postalCode = '12345'; // TODO: Replace with actual postal code fetching logic

  return {
    props: {
      postalCode,
      userId,
    },
  };
}