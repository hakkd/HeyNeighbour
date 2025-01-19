import styles from '../app/cssFiles/landingPage.module.css';
import Link from 'next/link'

const LandingPage = () => {
    return (
        <div className={styles.landingPage}>
        <img className={styles.landingPageChild} alt="" src="../assets/armL.svg" />
        <img className={styles.textLogo} alt="" src="../assets/logo.svg" />
        <div className={styles.testimonials}>TESTIMONIALS</div>
        <div className={styles.home}>HOME</div>
        <div className={styles.aboutUs}>ABOUT US</div>
        <img className={styles.vectorIcon} alt="" src="../assets/green.svg" width="70%"/>
        <div className={styles.component4}>
        <img className={styles.vectorIcon1} alt="" src="../assets/red.svg" />
        <img className={styles.faceLIcon} alt="" src="../assets/faceL.svg" />
        </div>
        <img className={styles.landingPageItem} alt="" src="../assets/armR.svg" />
        <img className={styles.faceRIcon} alt="" src="../assets/faceR.svg" />
        <div className={styles.signUpButtonParent}>
        {/* <div className={styles.signUpButton}> */}
            {/* <div className={styles.signUpButtonChild} /> */}
            <Link href="/SignUpPage">
                <button className={styles.signUp}>SIGN UP</button>
            </Link>
            {/* </div> */}
            {/* <div className={styles.loginButton}> */}
                {/* <div className={styles.loginButtonChild} /> */}
                    <button className={styles.logIn}>LOG IN</button>
                {/* </div> */}
            </div>
        </div>
    );
};
export default LandingPage;