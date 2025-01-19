import { useCallback } from 'react';
import styles from '../app/cssFiles/Done.module.css';
import Link from 'next/link'

const Done = () => {

  const onTESTIMONIALSTextClick = useCallback(() => {
  }, []);

  return (
    <div className={styles.done}>
      <img className={styles.doneChild} alt="" src="Group 8.svg" />
      <div className={styles.component16}>
        
      <Link href="/LandingPage">
        <img className={styles.textLogo} alt="" src={`../assets/logo.svg`} />
        </Link>
        <div className={styles.testimonials} onClick={onTESTIMONIALSTextClick}>TESTIMONIALS</div>
        <div className={styles.aboutUs} onClick={onTESTIMONIALSTextClick}>ABOUT US</div>
        <div className={styles.myProfile} onClick={onTESTIMONIALSTextClick}>MY PROFILE</div>
      </div>
      <div className={styles.woohooParent}>
        <div className={styles.woohoo}>Woohoo!</div>
        <div className={styles.youHaveRegistered}>You have registered!</div>
        <Link href="/ChooseArea">
        <div className={styles.groupChild} onClick={onTESTIMONIALSTextClick} />
        <div className={styles.startBrowsing}>START BROWSING</div>
        </Link>
      </div>
      <img className={styles.doneItem} alt="" src="../Group 36.svg" />
      {/* Commit to git */}
    </div>
  );
};

export default Done;
