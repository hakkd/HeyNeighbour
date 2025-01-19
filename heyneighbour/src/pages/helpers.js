"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Helpers({ postalCode, jobType }) {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      const { title, description, date, jobType } = router.query;
      console.log('Query Params:', { title, description, date, jobType });
    }
  }, [router.isReady, router.query]);
  const { query } = router;

  // Safely access query parameters
  const title = query?.title || '';
  const description = query?.description || '';
  const date = query?.date || '';
  const jobTypeQuery = query?.jobType || '';

  const [helpers, setHelpers] = useState([]);
  const [loading, setLoading] = useState(true);

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
    console.log(title)
    async function assignHelper() {
      try {
        const response = await fetch('/api/assignHelper', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ helperId, title, description, date, jobType: jobTypeQuery }),
        });

        if (!response.ok) {
          throw new Error('Failed to assign helper');
        }

        const result = await response.json();
        console.log('Helper assigned successfully:', result);
        router.push('/addFavour');
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
          <div
            key={helper.id}
            style={{
              border: '1px solid #ccc',
              margin: '10px',
              padding: '10px',
              minWidth: '200px',
            }}
          >
            {helper.image && (
              <Image
                src={`data:image/jpeg;base64,${helper.image}`}
                alt={helper.name}
                width={100}
                height={100}
                style={{ objectFit: 'cover' }}
              />
            )}
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
  const postalCode = 'A1A 1A1';
  const jobType = 'manual labour';

  return {
    props: {
      postalCode,
      jobType,
    },
  };
}
