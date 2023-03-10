import axios from "axios";

const url = "https://api.open-meteo.com/v1/forecast";

export const getCurrentWeather = async () => {
    return axios.get(
        `${url}/?latitude=52.52&longitude=13.41&hourly=relativehumidity_2m,precipitation_probability&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max&timezone=auto`
    );
};

export const getLast10Days = async () => {
    return axios.get(
        `${url}/?latitude=52.52&longitude=13.41&past_days=10&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
    );
};
