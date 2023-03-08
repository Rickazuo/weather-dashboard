import AirCard from "../components/airCard/airCard";
import DegreeCard from "../components/degreeCard/degreeCard";
import Footer from "../components/footer/footer";
import SunHour from "../components/sunHour/sunHour";
import WeekWeather from "../components/weekWeather/weekWeather";
import styles from "./stlyes.module.css";

function HomePage() {
  return (
    <div>
      <div className={styles.container}>
        <DegreeCard />
        <div className={styles.rightSide}>
          <div className={styles.airAndSun}>
            <AirCard />
            <SunHour />
          </div>
          <WeekWeather />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
