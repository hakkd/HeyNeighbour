import { useCallback } from 'react';
import styles from '../app/cssFiles/SuccessPage.module.css';

const SuccessPage = () => {
  
  const onTESTIMONIALSTextClick = useCallback(() => {
    // Add your code here
  }, []);
  
  return (
    <div className={styles.successpage}>
      <div className={styles.thankYou}>Thank you!</div>
      <div className={styles.successpageChild} />
      <div className={styles.successpageItem} />
      <div className={styles.successpageInner} />
      <img className={styles.vectorIcon} alt="" src="../Vector 8.svg" />
      <div className={styles.yourRequestHas}>Your request has been submitted!</div>
      <div className={styles.component13}>
        <img className={styles.textLogo} alt="" src={`../assets/logo.svg`} />
        <div className={styles.testimonials} onClick={onTESTIMONIALSTextClick}>TESTIMONIALS</div>
        <div className={styles.aboutUs} onClick={onTESTIMONIALSTextClick}>ABOUT US</div>
        <div className={styles.myProfile} onClick={onTESTIMONIALSTextClick}>MY PROFILE</div>
      </div>
    </div>
  );
};

export default SuccessPage;
