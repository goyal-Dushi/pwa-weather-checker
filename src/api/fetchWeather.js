import axios from "axios";

export const getWeather = async (cityName) => {
  return await axios
    .get(process.env.REACT_APP_WEATHER_API, {
      params: {
        q: cityName,
        APPID: process.env.REACT_APP_API_ID,
        units: "metric",
      },
    })
    .then((res) => res.data).catch((err) => Promise.reject(err.response.data));
};
