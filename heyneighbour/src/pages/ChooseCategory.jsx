import { useCallback } from 'react';
import styles from '../app/cssFiles/ChooseCategory.module.css';
import Link from 'next/link'

const ChooseCategory = () => {

  const onGroupContainerClick = useCallback(() => {
  }, []);

  return (
    <div className={styles.choosecategory}>
      <div className={styles.choosecategoryInner}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.component4}>
        <img className={styles.vectorIcon} alt="" src="../Vector.svg" />
        <img className={styles.faceLIcon} alt="" src="Face L.svg" />
      </div>
      <div className={styles.youreASuperstar}>You’re a superstar! Which category would you like to help in?</div>
      <img className={styles.choosecategoryChild} alt="" src="Group 8.svg" />
      <div className={styles.choosecategoryItem} />
      <div className={styles.ellipseDiv} />
      <div className={styles.choosecategoryChild1} />
      <div className={styles.choosecategoryChild2} />
      <div className={styles.broomParent} onClick={onGroupContainerClick}>
      <Link href="/SignUpTwo">
        <img className={styles.broomIcon} alt="" src="Broom.svg" />
        </Link>
        <div className={styles.chores}>CHORES</div>
      </div>
      <div className={styles.component11}>
      <Link href="/LandingPage">
        <img className={styles.textLogo} alt="" src={`../assets/logo.svg`} />
        </Link>
        <div className={styles.testimonials} onClick={onGroupContainerClick}>TESTIMONIALS</div>
        <div className={styles.aboutUs} onClick={onGroupContainerClick}>ABOUT US</div>
        <div className={styles.myProfile} onClick={onGroupContainerClick}>MY PROFILE</div>
      </div>
      <div className={styles.groupParent} onClick={onGroupContainerClick}>
        <div className={styles.groupContainer}>
          <img className={styles.groupItem} alt="" src="../Group 25.svg" />
          <div className={styles.tech}>TECH</div>
        </div>
        <Link href="/SignUpTwo">
        <img className={styles.monitorIcon} alt="" src="Monitor.svg" />
        </Link>
      </div>
      <div className={styles.groupDiv} onClick={onGroupContainerClick}>
        <div className={styles.groupContainer}>
          <div className={styles.groupInner} />
          <div className={styles.shop}>SHOP</div>
        </div>
        <Link href="/SignUpTwo">
        <img className={styles.shoppingCartIcon} alt="" src="Shopping Cart.svg" />
        </Link>
      </div>
      <div className={styles.petsParent} onClick={onGroupContainerClick}>
        <div className={styles.chores}>PETS</div>
        <Link href="/SignUpTwo">
        <img className={styles.petIcon} alt="" src="Pet.svg" />
        </Link>
      </div>
      <div className={styles.chatParent} onClick={onGroupContainerClick}>
        <div className={styles.chores}>CHAT</div>
        <Link href="/SignUpTwo">
        <img className={styles.lovelyIcon} alt="" src="Lovely.svg" />
        </Link>
      </div>
      <div className={styles.rideParent} onClick={onGroupContainerClick}>
        <div className={styles.chores}>RIDE</div>
        <Link href="/SignUpTwo">
        <img className={styles.drivingIcon} alt="" src="Driving.svg" />
        </Link>
      </div>
      {/* Commit to git */}
    </div>
  );
};

export default ChooseCategory;
