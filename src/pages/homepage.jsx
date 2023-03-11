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

    const getSunTime = () => {
        let sunset = "",
            sunrise = "",
            time = "";

        if (weather) {
            sunset = new Date(weather?.daily?.sunset[0]);
            sunset = `${sunset.getHours().toString().padStart(2, "0")}:${sunset
                .getMinutes()
                .toString()
                .padStart(2, "0")}`;

            sunrise = new Date(weather?.daily?.sunrise[0]);
            sunrise = `${sunrise
                .getHours()
                .toString()
                .padStart(2, "0")}:${sunrise
                .getMinutes()
                .toString()
                .padStart(2, "0")}`;

            time = new Date();
            time = `${time.getHours().toString().padStart(2, "0")}:${time
                .getMinutes()
                .toString()
                .padStart(2, "0")}`;
        }

        return {
            sunset,
            sunrise,
            time,
        };
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerCards}>
                <DegreeCard
                    actualTemperature={
                        weather
                            ? `${weather?.current_weather?.temperature}${weather?.daily_units?.temperature_2m_max}`
                            : ""
                    }
                    maxTemperature={
                        weather
                            ? `${weather?.daily?.temperature_2m_max[0]}${weather?.daily_units?.temperature_2m_max}`
                            : ""
                    }
                    minTemperature={`${weather?.daily?.temperature_2m_min[0]}${weather?.daily_units?.temperature_2m_min}`}
                    wind={weather?.current_weather?.windspeed}
                    humidity={weather?.hourly?.relativehumidity_2m[0]}
                    rain={weather?.hourly?.rain[0]}
                />
                <div className={styles.rightSide}>
                    <div className={styles.airAndSun}>
                        <AirCard />
                        <SunHour
                            sunset={getSunTime().sunset}
                            sunrise={getSunTime().sunrise}
                            currentTime={getSunTime().time}
                        />
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
