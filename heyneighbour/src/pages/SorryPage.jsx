import { useCallback } from 'react';
import styles from '../app/cssFiles/SorryPage.module.css';

const SorryPage = () => {
  
  const onTESTIMONIALSTextClick = useCallback(() => {
    // Add your code here
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
        <img className={styles.textLogo} alt="" src={`../assets/logo.svg`} />
        <div className={styles.testimonials} onClick={onTESTIMONIALSTextClick}>TESTIMONIALS</div>
        <div className={styles.aboutUs} onClick={onTESTIMONIALSTextClick}>ABOUT US</div>
        <div className={styles.myProfile} onClick={onTESTIMONIALSTextClick}>MY PROFILE</div>
      </div>
    </div>
  );
};

export default SorryPage;
