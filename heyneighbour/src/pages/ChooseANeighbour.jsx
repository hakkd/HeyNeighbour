import Link from 'next/link'; // Import Link from next/link
import styles from '../app/cssFiles/ChooseANeighbour.module.css';

const ChooseANeighbour = () => {
  return (
    <div className={styles.chooseaneighbour}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.component1Icon} alt="" src="../Component 1.svg" />
        <div className={styles.johnVancouverContainer}>
          <span>{`JOHN - `}</span>
          <span className={styles.vancouverBc}>Vancouver, BC</span>
        </div>
        <div className={styles.hiImJohn}>
          Hi, I'm John! I'm passionate about helping seniors navigate the world around them, whether it's finding the right resources, learning new tech, or simply making everyday life a little easier. I believe that everyone, no matter their age, deserves to feel connected and empowered.
        </div>
      </div>
      <div className={styles.chooseANeighbour}>Choose a neighbour!</div>
      <img className={styles.chooseaneighbourChild} alt="" src="../star.svg" />
      <img className={styles.chooseaneighbourItem} alt="" src="../star.svg" />
      <img className={styles.chooseaneighbourInner} alt="" src="../star.svg" />
      <img className={styles.starIcon} alt="" src="../star.svg" />
      <img className={styles.chooseaneighbourChild1} alt="" src="../star.svg" />
      <b className={styles.helpsWithYard}>{`Helps with: Yard work, Errands `}</b>
      <div className={styles.component12}>
        <img className={styles.textLogo} alt="" src={`../assets/logo.svg`} />
        <div className={styles.testimonials}>TESTIMONIALS</div>
        <div className={styles.aboutUs}>ABOUT US</div>
        {/* Wrap MY PROFILE in Link component */}
        <Link href="/submit-request">
          <div className={styles.myProfile}>MY PROFILE</div>
        </Link>
      </div>
      {/* Wrap component21Icon in Link component */}
      <Link href="/SubmitRequest">
        <img className={styles.component21Icon} alt="" src="../assets/component5.svg" />
      </Link>
      <Link href="/SorryPage">
      <img className={styles.component22Icon} alt="" src="../assets/component6.svg" />
      </Link>
    </div>
  );
};

export default ChooseANeighbour;
