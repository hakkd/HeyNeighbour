import { useCallback } from 'react';
import styles from '../app/cssFiles/signUpPage.module.css';
import Link from 'next/link'

const SignUpPage = () => {

  const onTESTIMONIALSTextClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.signup1}>
      <div className={styles.signup1Inner}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.component4}>
        <img className={styles.vectorIcon} alt="" src="../assets/red.svg" />
        <img className={styles.faceLIcon} alt="" src="../Face L.svg" />
      </div>
      <div className={styles.areYouHere}>Are you here to get help?</div>
      <div className={styles.letsGetStarted}>Let’s get started...</div>
      <img className={styles.signup1Child} alt="" src="Group 8.svg" />
      <div className={styles.component13}>
        <img className={styles.textLogo} alt="" src={`../assets/logo.svg`} />
        <div className={styles.testimonials} onClick={onTESTIMONIALSTextClick}>TESTIMONIALS</div>
        <div className={styles.aboutUs} onClick={onTESTIMONIALSTextClick}>ABOUT US</div>
        <div className={styles.myProfile} onClick={onTESTIMONIALSTextClick}>MY PROFILE</div>
      </div>
	  <Link href="/ChooseCategory">
      <img className={styles.component6Icon} alt="" src="../assets/component6.svg" onClick={onTESTIMONIALSTextClick} />
	  </Link>
	  <Link href="/SignUpTwo">
	  <img className={styles.component5Icon} alt="" src="../assets/component5.svg" onClick={onTESTIMONIALSTextClick} />
	  </Link>
    </div>
  );
};

export default SignUpPage;
