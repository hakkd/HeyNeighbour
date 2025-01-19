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

  return (
    <div>
      <h1>Open favours in Your Area</h1>
      <ul>
        {favours.map((favour) => (
          <li key={favour.id}>
            <h2>{favour.title}</h2>
            <p>{favour.description}</p>
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
    },
  };
}