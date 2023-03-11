import styles from "./styles.module.css";
import leaf from "../../assets/leaf.svg";

export default function AirCard({
    carbon,
    nitrogen,
    ozone,
    pm2_5,
    pm10,
    sulphur,
    europeanEvaluation,
}) {
    const airQuality = (europeanEvaluation) => {
        switch (true) {
            case europeanEvaluation <= 20:
                return { label: "Boa", css: "good" };
            case europeanEvaluation > 20 && europeanEvaluation <= 40:
                return { label: "Razoável", css: "good" };
            case europeanEvaluation > 40 && europeanEvaluation <= 60:
                return { label: "Moderado", css: "ok" };
            case europeanEvaluation > 60 && europeanEvaluation <= 80:
                return { label: "Ruim", css: "bad" };
            case europeanEvaluation > 80 && europeanEvaluation < 100:
                return { label: "Muito Ruim", css: "bad" };
            case europeanEvaluation >= 100:
                return { label: "Extremamente Ruim", css: "veryBad" };
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <img src={leaf} alt="leaf icon" />
                <span>Qualidade do ar</span>
            </h1>
            <div className={styles.qualityNow}>
                <span className={styles[airQuality(europeanEvaluation).css]}>
                    {airQuality(europeanEvaluation).label}
                </span>
                <span>{europeanEvaluation}</span>
            </div>
            <footer className={styles.qualityAirFooter}>
                <div className={styles.infoFooter}>
                    <span>{pm2_5}</span>
                    <span>PM2.5</span>
                </div>
                <div className={styles.infoFooter}>
                    <span>{pm10}</span>
                    <span>PM10</span>
                </div>
                <div className={styles.infoFooter}>
                    <span>{sulphur}</span>
                    <span>SO2</span>
                </div>
                <div className={styles.infoFooter}>
                    <span>{nitrogen}</span>
                    <span>NO2</span>
                </div>
                <div className={styles.infoFooter}>
                    <span>{ozone}</span>
                    <span>O3</span>
                </div>
                <div className={styles.infoFooter}>
                    <span>{carbon}</span>
                    <span>CO</span>
                </div>
            </footer>
        </div>
    );
}
