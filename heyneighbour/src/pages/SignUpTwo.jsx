import { useCallback } from 'react';
import styles from '../app/cssFiles/SignUpTwo.module.css';
import Link from 'next/link'

const SignUpTwo = () => {

  const onComponentClick = useCallback(() => {
  }, []);

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
      <div className={styles.awesomePleaseInput}>Awesome! Please input your email and phone number:</div>
      <img className={styles.signuptwoChild} alt="" src="Group 8.svg" />
      <Link href="/SignUpThree">
      <img className={styles.component5Icon} alt="" src="../assets/component5.svg" onClick={onComponentClick} />
      </Link>
      <div className={styles.signuptwoItem} />
      <div className={styles.rectangleDiv} />
      <div className={styles.component14}>
      <Link href="/LandingPage">
        <img className={styles.textLogo} alt="" src={`../assets/logo.svg`} />
        </Link>
        <div className={styles.testimonials} onClick={onComponentClick}>TESTIMONIALS</div>
        <div className={styles.aboutUs} onClick={onComponentClick}>ABOUT US</div>
        <div className={styles.myProfile} onClick={onComponentClick}>MY PROFILE</div>
        {/* Commit to git */}
      </div>
    </div>
  );
};

export default SignUpTwo;
