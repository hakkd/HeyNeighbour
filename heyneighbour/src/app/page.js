import styles from "./cssFiles/landingPage.module.css";
import LandingPage from "../pages/LandingPage"

export default function Home() {
  return (
    <div className={styles.landingPage}>
      <LandingPage/>
    </div>
  );
}
