import { useCallback } from 'react';
import styles from '../app/cssFiles/SignUpThree.module.css';
import Link from 'next/link'

const SignUpThree = () => {

  const onComponentClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.signupthree}>
      <div className={styles.signupthreeInner}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.component4}>
        <img className={styles.vectorIcon} alt="" src="../assets/red.svg" />
        <img className={styles.faceLIcon} alt="" src="../Face L.svg" />
      </div>
      <div className={styles.password}>Password:</div>
      <div className={styles.confirm}>Confirm:</div>
      <div className={styles.andNowInput}>And now, input your password two times!</div>
      <img className={styles.signupthreeChild} alt="" src="Group 8.svg" />
      <Link href="/SignUpFour">
      <img className={styles.component5Icon} alt="" src="../assets/component5.svg" onClick={onComponentClick} />
      </Link>
      <div className={styles.signupthreeItem} />
      <div className={styles.rectangleDiv} />
      <div className={styles.component15}>
        <img className={styles.textLogo} alt="" src={`../assets/logo.svg`} />
        <div className={styles.testimonials} onClick={onComponentClick}>TESTIMONIALS</div>
        <div className={styles.aboutUs} onClick={onComponentClick}>ABOUT US</div>
        <div className={styles.myProfile} onClick={onComponentClick}>MY PROFILE</div>
      </div>
    </div>
  );
};

export default SignUpThree;
