import styles from "./styles.module.css";
import sun from "../../assets/sun.svg";
import chartSun from "../../assets/sunChart.svg";
import Ball from "../sunBall/sunBall";
import { useEffect } from "react";

export default function ({ sunset, sunrise, currentTime }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <img src={sun} alt="" />
                <span>Horário do sol</span>
            </h1>
            <Ball sunset={sunset} sunrise={sunrise} currentTime={currentTime} />
            <div className={styles.baseSunTime}>
                <div>{sunrise}</div>
                <div>{sunset}</div>
            </div>
        </div>
    );
}
