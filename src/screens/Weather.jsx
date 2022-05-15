import React, { useState } from 'react';
import WeatherCard from '../components/weatherCard';
import { getWeather } from '../api/fetchWeather';
import Sun from '../images/sun.webp';
import Moon from '../images/moon.webp';
import { Link } from 'react-router-dom';

function Weather() {
  const [cityName, setName] = useState('');
  const [darkTheme, setDark] = useState(false);
  const [api, setData] = useState({ data: '', state: false });
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await getWeather(cityName);
    setName('');
    setData({ ...api, data: res, state: true });
  }

  return (
    <>
      <nav
        className={
          darkTheme
            ? 'navbar navbar-expand-lg navbar-dark bg-dark'
            : 'navbar navbar-expand-lg navbar-light bg-light'
        }>
        <div className={'container sm'}>
          <h1 className={'navbar-brand'} style={{ fontSize: '2rem' }}>
            {'DGWeather'}
          </h1>
          {darkTheme ? (
            <img
              src={Sun}
              alt={'light-theme-toggler'}
              onClick={() => setDark(false)}
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <img
              src={Moon}
              alt={'dark-theme-toggler'}
              onClick={() => setDark(true)}
              height={'32px'}
              width={'32px'}
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>
      </nav>
      <div
        className={
          darkTheme
            ? 'container-fluid pt-3 pb-3 bg-secondary'
            : 'container-fluid pt-3 pb-3 bg-light'
        }>
        <div className={'container sm'}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={'form-group mb-3'}>
              <input
                type={'text'}
                className={'form-control form-control-lg'}
                value={cityName}
                onChange={(e) => setName(e.target.value)}
                placeholder={'Enter city'}
              />
            </div>
            <div
              className={
                'd-flex w-25 justify-content-between align-items-center'
              }>
              <button
                className={
                  darkTheme
                    ? 'btn btn-outline-dark btn-lg'
                    : 'btn btn-outline-primary btn-lg'
                }
                type={'submit'}>
                {'Get weather'}
              </button>
              <Link
                to={'/armain'}
                className={
                  darkTheme
                    ? 'btn btn-outline-dark btn-lg'
                    : 'btn btn-outline-primary btn-lg'
                }>
                {'AR App'}
              </Link>
            </div>
          </form>
        </div>
        <div
          className={'container sm mt-3'}
          style={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
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
      </div>
    </>
  );
}

export default Weather;
