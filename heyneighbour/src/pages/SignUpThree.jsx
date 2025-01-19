import { useState } from 'react';
import styles from '../app/cssFiles/SignUpThree.module.css';
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation';

export default function SignUpThree() {
  const params = useSearchParams();
  const email = params.get('email');
  const phoneNumber = params.get('phoneNumber');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // Redirect to the next page with email, phone number, and password
    router.push(
      `/SignUpFour?email=${encodeURIComponent(email)}&phoneNumber=${encodeURIComponent(phoneNumber)}&password=${encodeURIComponent(password)}`
    );
  };

  return (
    <div className={styles.signupthree}>
      <div className={styles.signupthreeInner}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.component4}>
        <img className={styles.vectorIcon} alt="" src="../assets/red.svg" />
        <img className={styles.faceLIcon} alt="" src="../Face L.svg" />
      </div>
      <div className={styles.email}>Email: {email}</div>
      <div className={styles.phoneNumber}>Phone Number: {phoneNumber}</div>
      <form onSubmit={handleSubmit}>
        <div className={styles.password}>Password:</div>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={styles.passwordInput}
        />
        <div className={styles.confirm}>Confirm:</div>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className={styles.confirmPasswordInput}
        />
        {error && <div className={styles.error}>{error}</div>}
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}
