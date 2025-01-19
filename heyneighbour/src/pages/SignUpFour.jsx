import { useState } from 'react';
import styles from '../app/cssFiles/signUpFour.module.css';
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation';

export default function SignUpFour () {
  const params = useSearchParams();
  const email = params.get('email');
  const phoneNumber = params.get('phoneNumber');
  const password = params.get('password');
  const router = useRouter();
  const [postalCode, setPostalCode] = useState('');

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, phoneNumber, password, postalCode }),
      });
      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
    
    router.push({
      pathname: '/Done', // Replace with your next page path
      query: { email, phoneNumber, password, postalCode },
    });
  };

  return (
    <div className={styles.signupfour}>
      <div className={styles.signupfourInner}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.component4}>
        <img className={styles.vectorIcon} alt="" src="../assets/red.svg" />
        <img className={styles.faceLIcon} alt="" src="Face L.svg" />
      </div>
      <div className={styles.postalCode}>Postal Code:</div>
      <input
        type="text"
        value={postalCode}
        onChange={handlePostalCodeChange}
        className={styles.postalCodeInput}
      />
      <div className={styles.andFinallyEnter}>And finally, enter your postal code!</div>
      <img className={styles.signupfourChild} alt="" src="Group 8.svg" />
      <button onClick={handleSubmit} className={styles.submitButton}>Submit
        <img className={styles.component5Icon} alt="" src="../assets/component5.svg" />
      </button>
      <div className={styles.signupfourItem} />
      <div className={styles.signupfourItem} />
    </div>
  );
};
