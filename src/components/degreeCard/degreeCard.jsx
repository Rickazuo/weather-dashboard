import styles from "./styles.module.css";
import pin from "../../assets/pin.svg";
import windyIcon from "../../assets/windy.svg";
import humidityIcon from "../../assets/humidity.svg";
import rainIcon from "../../assets/rain.svg";

export default function DegreeCard({
    actualTemperature = "",
    maxTemperature = "",
    minTemperature = "",
    wind = "",
    humidity = "",
    rain = "",
}) {
    return (
        <div className={styles.card}>
            <div className={styles.location}>
                <img src={pin} alt="a pin image of location" />
                Rio do Sul, SC
            </div>
            <div className={styles.degree}>
                <div className={styles.temperatureNow}>{actualTemperature}</div>
                <div className={styles.minMax}>
                    <div>
                        <strong>{maxTemperature}</strong>
                    </div>
                    <div>{minTemperature}</div>
                </div>
            </div>
            <div className={styles.footerCards}>
                <div className={styles.cards}>
                    <img src={windyIcon} alt="image of windy icon" />
                    <div className={styles.information}>
                        <span>Vento</span>
                        <div className={styles.variables}>
                            <span>{wind}</span>
                            <span>km/hr</span>
                        </div>
                    </div>
                </div>
                <div className={styles.cards}>
                    <img src={humidityIcon} alt="image of humidity icon" />
                    <div className={styles.information}>
                        <div>Umidade</div>
                        <div className={styles.variables}>
                            <span>{humidity}</span>
                            <span>%</span>
                        </div>
                    </div>
                </div>
                <div className={styles.cards}>
                    <img src={rainIcon} alt="image of rain icon" />
                    <div className={styles.information}>
                        <div>Chuva</div>
                        <div className={styles.variables}>
                            <span>{rain}</span>
                            <span>%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
