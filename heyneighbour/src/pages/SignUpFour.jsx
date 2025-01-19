import { useCallback } from 'react';
import styles from '../app/cssFiles/signUpFour.module.css';
import Link from 'next/link'

const SignUpFour = () => {

  const onComponentClick = useCallback(() => {
    // Add your code here
  }, []);

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
      <div className={styles.andFinallyEnter}>And finally, enter your postal code!</div>
      <img className={styles.signupfourChild} alt="" src="Group 8.svg" />
      <Link href="/Done">
      <img className={styles.component5Icon} alt="" src="../assets/component5.svg" onClick={onComponentClick} />
      </Link>
      <div className={styles.signupfourItem} />
      <div className={styles.signupfourItem} />
      <div className={styles.exampleA3b2c3}>Example: A3B 2C3</div>
      <div className={styles.component16}>
        <img className={styles.textLogo} alt="" src={`../assets/logo.svg`} />
        <div className={styles.testimonials} onClick={onComponentClick}>TESTIMONIALS</div>
        <div className={styles.aboutUs} onClick={onComponentClick}>ABOUT US</div>
        <div className={styles.myProfile} onClick={onComponentClick}>MY PROFILE</div>
      </div>
    </div>
  );
};

export default SignUpFour;
