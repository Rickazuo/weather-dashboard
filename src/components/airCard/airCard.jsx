import styles from "./styles.module.css";
import leaf from "../../assets/leaf.svg";

export default function AirCard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <img src={leaf} alt="leaf icon" />
        <span>Qualidade do ar</span>
      </h1>
      <div className={styles.qualityNow}>
        <span>Boa</span>
        <span>21</span>
      </div>
      <footer className={styles.qualityAirFooter}>
        <div className={styles.infoFooter}>
          <span>12.9</span>
          <span>PM2.5</span>
        </div>
        <div className={styles.infoFooter}>
          <span>12.9</span>
          <span>PM10</span>
        </div>
        <div className={styles.infoFooter}>
          <span>2.1</span>
          <span>SO2</span>
        </div>
        <div className={styles.infoFooter}>
          <span>1.4</span>
          <span>NO2</span>
        </div>
        <div className={styles.infoFooter}>
          <span>21.2</span>
          <span>O3</span>
        </div>
        <div className={styles.infoFooter}>
          <span>0.7</span>
          <span>CO</span>
        </div>
      </footer>
    </div>
  );
}
