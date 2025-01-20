import { useState } from 'react';
import Link from 'next/link';
import styles from '../app/cssFiles/SignUpTwo.module.css';

export default function SignUpTwo() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className={styles.signuptwo}>
      <div className={styles.signuptwoInner}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.component4}>
        <img className={styles.vectorIcon} alt="" src="../assets/red.svg" />
        <img className={styles.faceLIcon} alt="" src="Face L.svg" />
      </div>
      <div className={styles.email}>Email:</div>
      <div className={styles.phoneNumber}>
        <p className={styles.phone}>Phone</p>
        <p className={styles.phone}>Number:</p>
      </div>
      <div className={styles.awesomePleaseInput}>
        Awesome! Please input your email and phone number:
      </div>
      <img className={styles.signuptwoChild} alt="" src="Group 8.svg" />
      <Link href={`/SignUpThree?email=${encodeURIComponent(email)}&phoneNumber=${encodeURIComponent(phoneNumber)}`}>
        <img className={styles.component5Icon} alt="" src="../assets/component5.svg" />
      </Link>
      <div className={styles.signuptwoItem}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={styles.emailInput}
        />
      </div>
      <div className={styles.rectangleDiv}>
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className={styles.phoneNumberInput}
        />
      </div>
      <div className={styles.component14}>
        <Link href="/LandingPage">
          <img className={styles.textLogo} alt="" src={`../assets/logo.svg`} />
        </Link>
      </div>
    </div>
  );
}