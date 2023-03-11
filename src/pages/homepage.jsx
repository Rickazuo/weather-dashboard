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
                    actualTemperature={`${weather?.current_weather?.temperature}${weather?.daily_units?.temperature_2m_max}`}
                    maxTemperature={`${weather?.daily?.temperature_2m_max[0]}${weather?.daily_units?.temperature_2m_max}`}
                    minTemperature={`${weather?.daily?.temperature_2m_min[0]}${weather?.daily_units?.temperature_2m_min}`}
                    wind={weather?.current_weather?.windspeed}
                    humidity={weather?.hourly?.relativehumidity_2m[0]}
                    rain={weather?.hourly?.rain[0]}
                />
                <div className={styles.rightSide}>
                    <div className={styles.airAndSun}>
                        <AirCard />
                        <SunHour />
                    </div>
                    <WeekWeather
                        minWeeklyTemperature={
                            weather?.daily?.temperature_2m_min
                        }
                        maxWeeklyTemperature={
                            weather?.daily?.temperature_2m_max
                        }
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
