import { useCallback } from 'react';
import styles from '../app/cssFiles/FavourCard.module.css';
import { useRouter } from 'next/navigation';


export default function FavourCard({category, description, icon}) {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push(`/ChooseANeighbour?categoryName=${category}`);
  }, [category, router]);

  return (
      <div className={styles.favourCard} onClick={onGroupContainerClick}>
          <div className={styles.groupChild}>
            <img className={styles.componentIcon} alt="" src="../assets/component5.svg" onClick={onGroupContainerClick} />
            <div className={styles.category}>{(category || '').toUpperCase()}</div>
            <div className={styles.description}>{description}</div>
            <img className={styles.icon} alt="" src={icon} />
          </div>
        </div>
  );
}