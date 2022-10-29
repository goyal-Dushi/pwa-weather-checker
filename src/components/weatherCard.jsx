import { memo } from "react";
import './weatherCard.css';

function getDate(date) {
  var newdate = new Date(date * 1000);
  var hours = newdate.getHours();
  var minutes = "0" + newdate.getMinutes();
  var seconds = "0" + newdate.getSeconds();

  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  return formattedTime;
}

function WeatherCard({ data }) {

  const { main, weather, sys, wind, clouds, name } = data;
  const { temp, feels_like, humidity, temp_max, temp_min } = main;
  const { description, icon } = weather[0];
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const { country, sunrise, sunset } = sys;

  return (
    <div className={"card w-75"}>
      <div className='card-header'>
        <h3>
          <strong> {name} </strong> <sup> {country} </sup>{" "}
        </h3>
      </div>
      <img className={"card-img-top align-self-center"} height={200} style={{width: '200px'}} src={iconURL} alt='weather-icon' />
      <div className='card-body pt-0'>
        <div className={"card-title"} style={{ textTransform: "capitalize" }}>
          <h5> {description} </h5>
        </div>
        <div className="row mt-4">
          <div className="col">
            <h5> {"Temprature"} </h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item data-items'>
                <div> <b> {"Avg Temp"} </b> </div> <div> {temp}&deg;C </div>
              </li>
              <li className='list-group-item data-items'>
                <div> <b> {"Min"} </b> </div> <div> {temp_min}&deg;C </div>
              </li>
              <li className='list-group-item data-items'>
                <div> <b> {"Max"} </b> </div> <div> {temp_max}&deg;C </div>
              </li>
              <li className='list-group-item data-items'>
                <div> <b> {"Feels like"} </b> </div> <div> {feels_like}&deg;C </div>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5> {"Other"} </h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item data-items'>
                <div> <b> {"Humidity"} </b> </div> <div> {humidity + "%"} </div>
              </li>
              <li className='list-group-item data-items'>
                <div> <b> {"Wind Speed"} </b> </div> <div> {wind.speed + " m/s"} </div>
              </li>
              <li className='list-group-item data-items'>
                <div> <b> {"Cloudiness"} </b> </div> <div> {clouds.all + "%"} </div>
              </li>
              <li className='list-group-item data-items'>
                <div> <b> {"Sunrise"} </b> </div> <div> {getDate(sunrise) + " AM"} </div>
              </li>
              <li className='list-group-item data-items'>
                <div> <b> {"Sunset"} </b> </div> <div> {getDate(sunset) + " PM"} </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(WeatherCard);
