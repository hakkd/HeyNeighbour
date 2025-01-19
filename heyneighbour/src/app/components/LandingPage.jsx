// import styles from '../page.module.css';
// import RedBlob from './RedBlob';
// import GreenBlob from './GreenBlob';

// export const LandingPage = () => {
//     return (
//         <div className= {styles.blobs}>
//             <div className= {styles.redBlob}>
//                 <RedBlob style={{ width: '350px' }}/>
//             </div>
//             <div className= {styles.greenBlob}>
//                 <GreenBlob style={{ width: '500px' }}/>
//             </div>
//         </div>
        
//     );
// };

import styles from '../page.module.css';

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
        <div className={styles.signUpButton}>
        <div className={styles.signUpButtonChild} />
        <div className={styles.signUp}>SIGN UP</div>
        </div>
        <div className={styles.loginButton}>
        <div className={styles.loginButtonChild} />
        <div className={styles.logIn}>LOG IN</div>
        </div>
        </div>
        </div>
    );
};
export default LandingPage;