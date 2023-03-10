import { useState, useEffect } from "react";
import AirCard from "../components/airCard/airCard";
import DegreeCard from "../components/degreeCard/degreeCard";
import Footer from "../components/footer/footer";
import SunHour from "../components/sunHour/sunHour";
import WeekWeather from "../components/weekWeather/weekWeather";
import styles from "./stlyes.module.css";
import * as api from "../api/weather";

function HomePage() {
    const [weather, setWeather] = useState(null);

    const getCurrentWeather = async () => {
        const { data } = await api.getCurrentWeather();
        console.log(data);
        setWeather(data);
    };

    useEffect(() => {
        getCurrentWeather();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.containerCards}>
                <DegreeCard
                    actualTemperature={weather?.current_weather?.temperature}
                />
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
