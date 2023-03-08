import styles from "./styles.module.css";
import cloudy from "../../assets/cloudy.svg";
import bigSun from "../../assets/bigSun.svg";
import rain from "../../assets/cloudRain.svg";
import storm from "../../assets/cloudStorm.svg";
import sunAndCloud from "../../assets/sunAndCloud.svg";

export default function WeekWeather() {
  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <h3>Amanhã</h3>
        <img src={cloudy} alt="cloudy icon" />
        <div className={styles.footerTemperature}>
          <span>21</span>
          <span>16</span>
        </div>
      </div>
      <div className={styles.infos}>
        <h3>Sexta-Feira</h3>
        <img src={bigSun} alt="big sun icon" />
        <div className={styles.footerTemperature}>
          <span>21</span>
          <span>16</span>
        </div>
      </div>
      <div className={styles.infos}>
        <h3>Sábado</h3>
        <img src={rain} alt="rain icon" />
        <div className={styles.footerTemperature}>
          <span>21</span>
          <span>16</span>
        </div>
      </div>
      <div className={styles.infos}>
        <h3>Domingo</h3>
        <img src={storm} alt="storm icon" />
        <div className={styles.footerTemperature}>
          <span>21</span>
          <span>16</span>
        </div>
      </div>
      <div className={styles.infos}>
        <h3>Segunda-Feira</h3>
        <img src={sunAndCloud} alt="icon of a sun behind the cloud" />
        <div className={styles.footerTemperature}>
          <span>21</span>
          <span>16</span>
        </div>
      </div>
    </div>
  );
}
