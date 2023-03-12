import axios from "axios";

export const getCurrentWeather = async () => {
    return axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=-23.36&longitude=-46.84&hourly=temperature_2m,relativehumidity_2m,rain,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo"
    );
};

export const getCurrentAirQuality = async () => {
    return axios.get(
        "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=-23.55&longitude=-46.64&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,european_aqi&timezone=America%2FSao_Paulo"
    );
};
