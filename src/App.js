import React from "react";
import Info from "./components/info";
import Form from "./components/form"
import Weather from "./components/out"

const API_KEY = "03f901de29a483a8a216622ef62e58b4";

class App extends React.Component {

  state = {
    temp_max: undefined,
    temp_min: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    weather_description: undefined,
    wind: undefined,
    clouds: undefined,
    pressure: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {  
    e.preventDefault();
    var city = e.target.elements.city.value;  
    

    if(city) {
      const apiUrl = await 
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await apiUrl.json();
      console.log(data);
      
      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset *1000);
      var sunset_data = date.toLocaleTimeString();

      var sunrise = data.sys.sunrise;
      var dates = new Date();
      dates.setTime(sunrise *1000 );
      var sunrise_data = dates.toLocaleTimeString();

      this.setState({
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_data,
        sunset: sunset_data,
        weather_description: data.weather["0"].description,
        wind: data.wind.speed,
        clouds: data.clouds.all,
        pressure: data.main.pressure,
        error: undefined
    });
  } else {
      this.setState({
        temp_max: undefined,
        temp_min: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        weather_description: undefined,
        wind: undefined,
        clouds: undefined,
        pressure: undefined,
        error: "Your city name!"
    });
  }
} 

  render() {
    return (
      <div className="wrapper">
        <div className="main">
        <div className="container">
          <div className="row">
            <div className="info"><Info /></div>
            <div className="form">
            <Form WeatherMethod={this.gettingWeather} /></div>
            <div className="form1"><Weather 
              temp_max={this.state.temp_max}
              temp_min={this.state.temp_min}
              city={this.state.city}
              country={this.state.country}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              weather_description={this.state.weather_description}
              wind={this.state.wind}
              clouds={this.state.clouds}
              pressure={this.state.pressure}
              error={this.state.error}
            />
              </div>
            </div>
          </div>  
        </div> 
      </div>  
    );
  }
}



export default App;
