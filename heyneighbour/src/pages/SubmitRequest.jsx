import { useCallback } from 'react';
import styles from '../app/cssFiles/SubmitRequest.module.css';
import Link from 'next/link'

const SubmitRequest = () => {
  	
  	const onComponentClick = useCallback(() => {
  	}, []);
  	
  	return (
    		<div className={styles.submitrequest}>
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.maryTorontoContainer}>
          					<span>{`MARY - `}</span>
          					<span className={styles.torontoOn}>Toronto, ON</span>
        				</div>
        				<div className={styles.iHopeYoure}>I hope you're doing well! I was wondering if you could help me with cleaning my kitchen. It could really use a deep clean—especially the counters, sink, and the floors. I’d also appreciate help with wiping down the appliances.</div>
        				</div>
                        <img className={styles.component5Icon} alt="" src="../assets/component5.svg" onClick={onComponentClick} />
        				<div className={styles.submitYourRequest}>Submit your request!</div>
        				<b className={styles.titleINeed}>Title: I need help with cleaning!</b>
        				<b className={styles.to}>TO:</b>
        				<div className={styles.div}>39/100</div>
        				<div className={styles.component12}>
          					<img className={styles.textLogo} alt="" src={`Text & Logo.png`} />
          					<div className={styles.testimonials} onClick={onComponentClick}>TESTIMONIALS</div>
          					<div className={styles.aboutUs} onClick={onComponentClick}>ABOUT US</div>
          					<div className={styles.myProfile} onClick={onComponentClick}>MY PROFILE</div>
        				</div>
        				<div className={styles.rectangleParent}>
          					<div className={styles.groupChild} />
          					<div className={styles.maryTorontoContainer}>
            						<span>{`John - `}</span>
            						<span className={styles.torontoOn}>Burnaby, BC</span>
          					</div>
          					<div className={styles.iHopeYoure}> I was wondering if you could help me by picking up my prescriptions from the pharmacy. I’ve got the details ready, and I can provide you with the prescription information.</div>
        				</div>
        				<div className={styles.submitYourRequest}>Submit your request!</div>
        				<b className={styles.titleINeed}>Title: Please pick up my prescription</b>
                        <Link href="/SuccessPage">
                        <img className={styles.component5Icon} alt="" src="../assets/component5.svg" onClick={onComponentClick} />
                        </Link>
        				<b className={styles.to}>TO:</b>
        				<div className={styles.div}>39/100</div>
        				<div className={styles.component12}>
                        <Link href="/LandingPage">
          					<img className={styles.textLogo} alt="" src={`../assets/logo.svg`} />
                              </Link>
          					<div className={styles.testimonials} onClick={onComponentClick}>TESTIMONIALS</div>
          					<div className={styles.aboutUs} onClick={onComponentClick}>ABOUT US</div>
          					<div className={styles.myProfile} onClick={onComponentClick}>MY PROFILE</div>
        				</div>
      			</div>
  	);
};

export default SubmitRequest;
