import { useCallback } from 'react';
import styles from '../app/cssFiles/ChooseArea.module.css';
import Link from 'next/link'
import FavourCard from '../app/components/FavourCard';

const ChooseArea = () => {
  
  const onGroupContainerClick = useCallback(() => {
  }, []);

  const categories = [
    { category: "Tech Support", description: "Struggling with tech? From setting up your devices to troubleshooting software issues, our tech experts are here to make technology simple and stress-free.", icon: "../Monitor.svg" },
    { category: "Shopping & Groceries", description: "Need help with shopping or groceries? Our helpers can assist you with your shopping needs.", icon: "../Shopping Cart.svg" },
    { category: "Chores & Cleaning", description: "Need help with chores or cleaning? Our helpers can assist you with your household tasks.", icon: "../Broom.svg" },
    { category: "Pet Care", description: "Need help with pet care? Our helpers can assist you with taking care of your pets.", icon: "../Pet.svg" },
    { category: "Chat & Companionship", description: "Need someone to talk to? Our helpers can provide you with companionship and a friendly chat.", icon: "../Lovely.svg" },
    { category: "Riding Service", description: "Need a ride? Our helpers can provide you with transportation services.", icon: "../Driving.svg" },
  ]

  return (
    <div className={styles.choosearea}>
      <div className={styles.chooseareaInner}>
          <div className={styles.groupParent}>
          <div className={styles.whatAreaDo}>What area do you need help with?</div>
          {categories.map((item, index) => (
            <FavourCard
              key={index}
              category={item.category}
              description={item.description}
              icon={item.icon}
            />
          ))}
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
