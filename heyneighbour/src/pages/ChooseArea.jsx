import { useCallback } from 'react';
import styles from '../app/cssFiles/ChooseArea.module.css';
import Link from 'next/link'

const ChooseArea = () => {
  
  const onGroupContainerClick = useCallback(() => {
  }, []);
  
  return (
    <div className={styles.choosearea}>
      <div className={styles.whatAreaDo}>What area do you need help with?</div>
      <div className={styles.chooseareaInner}>
        <div className={styles.groupParent}>
          <div className={styles.groupContainer} onClick={onGroupContainerClick}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.technology}>{`TECHNOLOGY `}</div>
              <div className={styles.strugglingWithTech}>Struggling with tech? From setting up your devices to troubleshooting software issues, our tech experts are here to make technology simple and stress-free.</div>
            </div>
            <img className={styles.groupItem} alt="" src="../Rectangle 11.svg" />
            <img className={styles.monitorIcon} alt="" src="../Monitor.svg" />
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.shoppingAndGroceries}>SHOPPING AND GROCERIES</div>
              <div className={styles.strugglingWithTech}>Need a personal shopper? Whether it’s picking up groceries, buying gifts, prescription medicine or running errands, we’ll make sure you get what you need—without the hassle.</div>
            </div>
            <img className={styles.groupItem} alt="" src="../Rectangle 11.svg" />
            <img className={styles.shoppingCartIcon} alt="" src="../Shopping Cart.svg" />
          </div>
          <div className={styles.groupParent1}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.shoppingAndGroceries}>{`CHORES & CLEANING`}</div>
              <div className={styles.strugglingWithTech}>From tidying up to deep cleaning, our team can help with household chores, organizing, and maintaining a spotless home. No task is too big or small!</div>
            </div>
            <img className={styles.groupItem} alt="" src="../Rectangle 11.svg" />
            <img className={styles.lovelyIcon} alt="" src="../Lovely.svg" />
          </div>
          <div className={styles.groupParent2}>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <div className={styles.shoppingAndGroceries}>PET CARE</div>
                <div className={styles.strugglingWithTech}>Your furry friends deserve the best! Our pet care helpers can assist with walking, feeding, grooming, and even pet-sitting, ensuring your pets are well taken care of when you're busy.</div>
              </div>
              <img className={styles.groupItem} alt="" src="Rectangle 11.svg" />
            </div>
            <img className={styles.petIcon} alt="" src="../Pet.svg" />
          </div>
          <div className={styles.groupParent4}>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <div className={styles.shoppingAndGroceries}>{`CHAT & COMPANIONSHIP`}</div>
                <div className={styles.strugglingWithTech}>Sometimes all you need is someone to talk to. Whether it's a friendly chat or a deeper conversation, our companions are ready to listen, offer advice, or just keep you company.</div>
              </div>
              <img className={styles.groupItem} alt="" src="../Rectangle 11.svg" />
            </div>
            <img className={styles.broomIcon} alt="" src="../Broom.svg" />
          </div>
          <div className={styles.groupParent6}>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.shoppingAndGroceries}>RIDING SERVICE</div>
                  <div className={styles.strugglingWithTech}>Need a lift? Our reliable riding service helps you get to your destination safely and comfortably, whether it’s a trip to the store, a meeting, or a night out.</div>
                </div>
                <img className={styles.groupItem} alt="" src="../Rectangle 11.svg" />
              </div>
            </div>
            <img className={styles.drivingIcon} alt="" src="../Driving.svg" />
          </div>
          <Link href="/ChooseANeighbour">
          <img className={styles.component5Icon} alt="" src="../assets/component5.svg" onClick={onGroupContainerClick} />
          <img className={styles.component6Icon} alt="" src="../assets/component5.svg" onClick={onGroupContainerClick} />
          <img className={styles.component7Icon} alt="" src="../assets/component5.svg" onClick={onGroupContainerClick} />
          <img className={styles.component8Icon} alt="" src="../assets/component5.svg" onClick={onGroupContainerClick} />
          <img className={styles.component9Icon} alt="" src="../assets/component5.svg" onClick={onGroupContainerClick} />
          <img className={styles.component10Icon} alt="" src="../assets/component5.svg" onClick={onGroupContainerClick} />
          </Link>
          <div className={styles.component11}>
          <Link href="/LandingPage">
            <img className={styles.textLogo} alt="" src={`../assets/logo.svg`} />
            </Link>
            <div className={styles.testimonials} onClick={onGroupContainerClick}>TESTIMONIALS</div>
            <div className={styles.aboutUs} onClick={onGroupContainerClick}>ABOUT US</div>
            <div className={styles.myProfile} onClick={onGroupContainerClick}>MY PROFILE</div>
          </div>
        </div>
      </div>
      {/* Commit to git */}
    </div>
  );
};

export default ChooseArea;
