import { useCallback } from 'react';
import styles from '../app/cssFiles/LogInTwo.module.css';
import Link from 'next/link'

const LogInTwo = () => {

  const onTESTIMONIALSTextClick = useCallback(() => {
  }, []);

  return (
    <div className={styles.logintwo}>
        <Link href="/LandingPage">
      <img className={styles.textLogo} alt="" src={`../assets/logo.svg`} />
      </Link>
      <div className={styles.testimonials} onClick={onTESTIMONIALSTextClick}>TESTIMONIALS</div>
      <div className={styles.aboutUs} onClick={onTESTIMONIALSTextClick}>ABOUT US</div>
      <img className={styles.logintwoChild} alt="" src="Group 8.svg" />
      <div className={styles.logintwoItem} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.password}>Password:</div>
        <div className={styles.andYourPassword}>And your password!</div>
        <div className={styles.groupItem} />
      </div>
      <img className={styles.blueBlobIcon} alt="" src="../Blue Blob.png" />
      <Link href="/ChooseArea">
      <img className={styles.component5Icon} alt="" src="../assets/component5.svg" onClick={onTESTIMONIALSTextClick} />
      </Link>
    </div>
  );
};

export default LogInTwo;
