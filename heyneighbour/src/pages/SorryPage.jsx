import { useCallback } from 'react';
import styles from '../app/cssFiles/SorryPage.module.css';
import Link from 'next/link'

const SorryPage = () => {
  
  const onTESTIMONIALSTextClick = useCallback(() => {
  }, []);
  
  return (
    <div className={styles.sorrypage}>
      <div className={styles.wereSorry}>We’re sorry!</div>
      <div className={styles.sorrypageChild} />
      <div className={styles.sorrypageItem} />
      <div className={styles.sorrypageInner} />
      <img className={styles.vectorIcon} alt="" src="../Vector 9.svg" />
      <div className={styles.thereAreNo}>There are no more helpers.</div>
      <div className={styles.component13}>
      <Link href="/LandingPage">
        <img className={styles.textLogo} alt="" src={`../assets/logo.svg`} />
        </Link>
        <div className={styles.testimonials} onClick={onTESTIMONIALSTextClick}>TESTIMONIALS</div>
        <div className={styles.aboutUs} onClick={onTESTIMONIALSTextClick}>ABOUT US</div>
        <div className={styles.myProfile} onClick={onTESTIMONIALSTextClick}>MY PROFILE</div>
        {/* Commit to git */}
      </div>
    </div>
  );
};

export default SorryPage;
