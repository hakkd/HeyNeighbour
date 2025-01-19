"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Helpers({ postalCode, jobType }) {
  const [helpers, setHelpers] = useState([]);

  useEffect(() => {
    async function fetchHelpers() {
      const response = await fetch(`/api/helpers?postalCode=${postalCode}&jobType=${jobType}`);
      const data = await response.json();
      console.log(data);
      setHelpers(data);
    }

    fetchHelpers();
  }, [postalCode, jobType]);

  const handleChoose = (helperId) => {
    // Implement the logic for choosing a helper
    console.log(`Helper chosen: ${helperId}`);
  };

  return (
    <div>
      <h1>Helpers in Your Area</h1>
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {helpers.map((helper) => (
          <div key={helper.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', minWidth: '200px' }}>
          {helper.image && <Image src={`data:image/jpeg;base64,${helper.image}`} alt={helper.name} width={100} height={100} objectFit="cover" />}
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