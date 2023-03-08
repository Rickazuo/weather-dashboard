import styles from "./styles.module.css";
import pin from "../../assets/pin.svg";
import windy from "../../assets/windy.svg";
import humidity from "../../assets/humidity.svg";
import rain from "../../assets/rain.svg";

export default function DegreeCard() {
  return (
    <div className={styles.card}>
      <div className={styles.location}>
        <img src={pin} alt="a pin image of location" />
        Rio do Sul, SC
      </div>
      <div className={styles.degree}>
        <div className={styles.temperatureNow}>18c</div>
        <div className={styles.minMax}>
          <div>
            <strong>22</strong>
          </div>
          <div>16</div>
        </div>
      </div>
      <div className={styles.footerCards}>
        <div className={styles.cards}>
          <img src={windy} alt="image of windy icon" />
          <div className={styles.information}>
            <span>Vento</span>
            <div className={styles.variables}>
              <span>17</span>
              <span>km/hr</span>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <img src={humidity} alt="image of humidity icon" />
          <div className={styles.information}>
            <div>Umidade</div>
            <div className={styles.variables}>
              <span>31</span>
              <span>%</span>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <img src={rain} alt="image of rain icon" />
          <div className={styles.information}>
            <div>Chuva</div>
            <div className={styles.variables}>
              <span>10</span>
              <span>%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
