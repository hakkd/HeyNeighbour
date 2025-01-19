import {useCallback } from 'react';
import styles from '../app/cssFiles/signUpPage.module.css';


const SignUpPage = () => {
  	
  	const onComponentClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.registration1}>
      			<div className={styles.registration1Inner}>
        				<div className={styles.groupChild} />
      			</div>
      			<div className={styles.component4}>
        				<img className={styles.vectorIcon} alt="" src="Vector.svg" />
        				<img className={styles.faceLIcon} alt="" src="Face L.svg" />
      			</div>
      			<div className={styles.areYouHere}>Are you here to get help?</div>
        				<div className={styles.letsGetStarted}>Let's get started...</div>
        				<img className={styles.component6Icon} alt="" src="Component 6.svg" onClick={onComponentClick} />
        				<img className={styles.registration1Child} alt="" src="Group 8.svg" />
        				<img className={styles.component5Icon} alt="" src="Component 5.svg" onClick={onComponentClick} />
        				<div className={styles.component13}>
          					<img className={styles.textLogo} alt="" src={`Text & Logo.png`} />
          					<div className={styles.testimonials}>TESTIMONIALS</div>
          					<div className={styles.aboutUs}>ABOUT US</div>
          					<div className={styles.myProfile}>MY PROFILE</div>
        				</div>
        </div>);
    };
      			
export default SignUpPage;
      			