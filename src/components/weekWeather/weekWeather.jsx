import styles from "./styles.module.css";
import cloudy from "../../assets/cloudy.svg";
import bigSun from "../../assets/bigSun.svg";
import rain from "../../assets/cloudRain.svg";
import storm from "../../assets/cloudStorm.svg";
import sunAndCloud from "../../assets/sunAndCloud.svg";

export default function WeekWeather({
    minWeeklyTemperature,
    maxWeeklyTemperature,
}) {
    const weekDays = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
    ];

    const getCircularDay = (daysToAdd) => {
        const currentDay = new Date().getDay();
        let goalDay = currentDay;

        for (let i = 0; i < daysToAdd; i++) {
            if (goalDay === weekDays.length - 1) {
                goalDay = 0;
            }
            goalDay++;
        }

        return goalDay;
    };

    return (
        <div className={styles.container}>
            <div className={styles.infos}>
                <h3>Amanhã</h3>
                <img src={cloudy} alt="cloudy icon" />
                <div className={styles.footerTemperature}>
                    <span>
                        {maxWeeklyTemperature &&
                            parseInt(maxWeeklyTemperature[getCircularDay(1)])}
                        º
                    </span>
                    <span>
                        {minWeeklyTemperature &&
                            parseInt(minWeeklyTemperature[getCircularDay(1)])}
                        º
                    </span>
                </div>
            </div>
            <div className={styles.infos}>
                <h3>{weekDays[getCircularDay(2)]}</h3>
                <img src={bigSun} alt="big sun icon" />
                <div className={styles.footerTemperature}>
                    <span>
                        {maxWeeklyTemperature &&
                            parseInt(maxWeeklyTemperature[getCircularDay(2)])}
                        º
                    </span>
                    <span>
                        {minWeeklyTemperature &&
                            parseInt(minWeeklyTemperature[getCircularDay(2)])}
                        º
                    </span>
                </div>
            </div>
            <div className={styles.infos}>
                <h3>{weekDays[getCircularDay(3)]}</h3>
                <img src={rain} alt="rain icon" />
                <div className={styles.footerTemperature}>
                    <span>
                        {maxWeeklyTemperature &&
                            parseInt(maxWeeklyTemperature[getCircularDay(3)])}
                        º
                    </span>
                    <span>
                        {minWeeklyTemperature &&
                            parseInt(minWeeklyTemperature[getCircularDay(3)])}
                        º
                    </span>
                </div>
            </div>
            <div className={styles.infos}>
                <h3>{weekDays[getCircularDay(4)]}</h3>
                <img src={storm} alt="storm icon" />
                <div className={styles.footerTemperature}>
                    <span>
                        {maxWeeklyTemperature &&
                            parseInt(maxWeeklyTemperature[getCircularDay(4)])}
                        º
                    </span>
                    <span>
                        {minWeeklyTemperature &&
                            parseInt(minWeeklyTemperature[getCircularDay(4)])}
                        º
                    </span>
                </div>
            </div>
            <div className={styles.infos}>
                <h3>{weekDays[getCircularDay(5)]}</h3>
                <img src={sunAndCloud} alt="icon of a sun behind the cloud" />
                <div className={styles.footerTemperature}>
                    <span>
                        {maxWeeklyTemperature &&
                            parseInt(minWeeklyTemperature[getCircularDay(5)])}
                        º
                    </span>
                    <span>
                        {maxWeeklyTemperature &&
                            parseInt(minWeeklyTemperature[getCircularDay(5)])}
                        º
                    </span>
                </div>
            </div>
        </div>
    );
}
