import { useState } from "react";
import { getWeather } from "./api/fetchWeather";
import WeatherCard from "./components/weatherCard";

function App() {
  const [cityName, setName] = useState("");
  const [api, setData] = useState({ data: "", state: false });
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await getWeather(cityName);
    setName("");
    setData({ ...api, data: res, state: true });
  }

  return (
    <div className='App'>
      <h1> {"App home"} </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type={"text"}
          value={cityName}
          onChange={(e) => setName(e.target.value)}
          placeholder={"Enter city"}
        />
        <button type={"submit"}> {"Get weather"} </button>
      </form>
      {api.state ? (
        <WeatherCard
          key={api.data.weather[0].id}
          desc={api.data.weather[0].description}
          icon={`http://openweathermap.org/img/wn/${api.data.weather[0].icon}@2x.png`}
          temp={api.data.main.temp}
          feels={api.data.main.feels_like}
          humid={api.data.main.humidity}
          min_temp={api.data.main.temp_min}
          max_temp={api.data.main.temp_max}
          wind_speed={api.data.wind.speed}
          cloud={api.data.clouds.all}
          city={api.data.name}
          country={api.data.sys.country}
          sunrise={api.data.sys.sunrise}
          sunset={api.data.sys.sunset}
        />
      ) : null}
    </div>
  );
}

export default App;
