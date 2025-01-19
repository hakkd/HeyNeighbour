"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Helpers({ postalCode, jobType }) {
  const [helpers, setHelpers] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const favour = router.query?.favour ? JSON.parse(router.query.favour) : null;

  useEffect(() => {
    async function fetchHelpers() {
      const response = await fetch(`/api/helpers?postalCode=${postalCode}&jobType=${jobType}`);
      const data = await response.json();
      setHelpers(data);
      setLoading(false);
    }

    fetchHelpers();
  }, [postalCode, jobType]);

  const handleChoose = (helperId) => {
    console.log(`Helper chosen: ${helperId}`);
    async function assignHelper() {
      try {
        const response = await fetch('/api/assignHelper', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ helperId, favour }),
        });

        if (!response.ok) {
          throw new Error('Failed to assign helper');
        }

        const result = await response.json();
        console.log('Helper assigned successfully:', result);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    assignHelper();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Helpers in Your Area</h1>
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {helpers.map((helper) => (
          <div key={helper.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', minWidth: '200px' }}>
            {helper.image && <Image src={`data:image/jpeg;base64,${helper.image}`} alt={helper.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
            <h2>{helper.name}</h2>
            <p>Email: {helper.email}</p>
            <p>Postal Code: {helper.postalCode}</p>
            <p>Job Types: {helper.jobTypes}</p>
            <p>Has Car: {helper.hasCar ? 'Yes' : 'No'}</p>
            <button onClick={() => handleChoose(helper.id)}>Choose</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// This function gets called at build time
export async function getServerSideProps(context) {
  // Fetch the current user's postal code and job type from your authentication system or query parameters
  const postalCode = 'A1A 1A1'; // Replace with actual postal code fetching logic
  const jobType = 'manual labour'; // Replace with actual job type fetching logic

  return {
    props: {
      postalCode,
      jobType,
    },
  };
}