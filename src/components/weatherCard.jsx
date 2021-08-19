import { memo } from "react";

function WeatherCard(props) {
  function getDate(date) {
    var newdate = new Date(date * 1000);
    var hours = newdate.getHours();
    var minutes = "0" + newdate.getMinutes();
    var seconds = "0" + newdate.getSeconds();

    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedTime;
  }

  return (
    <div className={"card"} style={{ maxWidth: "250px", minWidth: "200px" }}>
      <div className='card-header'>
        <h3>
          <strong> {props.city} </strong> <sup> {props.country} </sup>{" "}
        </h3>
      </div>
      <img className={"card-img-top"} src={props.icon} alt='weather-icon' />
      <div className='card-body'>
        <div className={"card-title"} style={{ textTransform: "capitalize" }}>
          <h5> {props.desc} </h5>
        </div>
      </div>
      <h5> {"Temprature"} </h5>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <b> {"Avg Temp : "} </b> {props.temp}&deg;C
        </li>
        <li className='list-group-item'>
          <b> {"Min : "} </b> {props.min_temp}&deg;C
        </li>
        <li className='list-group-item'>
          <b> {"Max : "} </b> {props.max_temp}&deg;C
        </li>
        <li className='list-group-item'>
          <b> {"Feels like : "} </b> {props.feels}&deg;C
        </li>
      </ul>
      <h5 style={{ margin: "5px 0px" }}> {"Other"} </h5>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <b> {"Humidity: "} </b> {props.humid + "%"}
        </li>
        <li className='list-group-item'>
          <b> {"Wind Speed : "} </b> {props.wind_speed + "m/s"}
        </li>
        <li className='list-group-item '>
          <b> {"Cloudiness : "} </b> {props.cloud + "%"}
        </li>
        <li className='list-group-item'>
          <b> {"Sunrise : "} </b> {getDate(props.sunrise) + " AM"}
        </li>
        <li className='list-group-item'>
          <b> {"Sunset : "} </b> {getDate(props.sunset) + " PM"}
        </li>
      </ul>
    </div>
  );
}

export default memo(WeatherCard);
