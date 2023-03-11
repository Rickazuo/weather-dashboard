import axios from "axios";

const url = "https://api.open-meteo.com/v1/forecast";

export const getCurrentWeather = async () => {
    return axios.get(
        `${url}/?latitude=-23.36&longitude=-46.84&hourly=temperature_2m,relativehumidity_2m,rain,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo`
    );
};
