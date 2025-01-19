import { useCallback } from 'react';
import styles from '../app/cssFiles/LogInOne.module.css';
import Link from 'next/link'

const LogInOne = () => {

  const onTextLogoClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.loginone}>
        <Link href="/LandingPage">
      <img className={styles.textLogo} alt="" src={`../assets/logo.svg`} onClick={onTextLogoClick} />
      </Link>
      <div className={styles.testimonials} onClick={onTextLogoClick}>TESTIMONIALS</div>
      <div className={styles.aboutUs} onClick={onTextLogoClick}>ABOUT US</div>
      <div className={styles.loginoneInner}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.email}>Email:</div>
      <div className={styles.welcomeBackPlease}>Welcome back! Please enter your email:</div>
      <img className={styles.loginoneChild} alt="" src=".../public/assets/faceR.svg" />
      <Link href="/LogInTwo">
      <img className={styles.component5Icon} alt="" src="../assets/component5.svg" onClick={onTextLogoClick} />
      </Link>
      <div className={styles.loginoneItem} />
      <div className={styles.rectangleDiv} />
      <img className={styles.blueBlobIcon} alt="" src="../assets/green.svg" />
      {/* Commit to git */}
    </div>
  );
};

export default LogInOne;
