import axios from "axios";

export const getWeather = async (cityName) => {
  const data = await axios
    .get(process.env.REACT_APP_WEATHER_API, {
      params: {
        q: cityName,
        APPID: process.env.REACT_APP_API_ID,
        units: "metric",
      },
    })
    .then((res) => res.data);
  return data;
};
