import React from "react";
 
 
const Weather = (props) => (
	<div className="infoWeath ">
      { props.city &&
        <div>
          <p align="center">Weather in {props.city}, {props.country}</p>
          <p>Max temperature: {props.temp_max} °С</p>
          <p>Min temperature: {props.temp_min} °С</p>
          <p>Sunrise: {props.sunrise}</p>
          <p>Sunset: {props.sunset}</p>
          <p>Cloudiness: {props.weather_description}</p>
          <p>Wind: {props.wind} m/s</p>
          <p>Humidity: {props.clouds} %</p>
          <p>Pressure: {props.pressure} hpa</p>
        </div>
      }
      <p className="error">{ props.error }</p>
      </div> )
 
 
 
export default Weather;