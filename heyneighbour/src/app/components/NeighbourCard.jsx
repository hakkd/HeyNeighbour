import { useCallback } from 'react';
import styles from '../cssFiles/FavourCard.module.css';
import { useRouter } from 'next/navigation';

export default function NeighbourCard({category, description, icon}) {
    return (
        <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.component1Icon} alt="" src="../Component 1.svg" />
        <div className={styles.neighbourContainer}>
          <span>{`JOHN - `}</span>
          <span className={styles.vancouverBc}>Vancouver, BC</span>
        </div>
        <div className={styles.hiImJohn}>
          Hi, I'm John! I'm passionate about helping seniors navigate the world around them, whether it's finding the right resources, learning new tech, or simply making everyday life a little easier. I believe that everyone, no matter their age, deserves to feel connected and empowered.
        </div>
      </div>
    );
}