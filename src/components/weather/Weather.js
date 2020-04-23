import React, { Component } from 'react';
import './Weather.css'

class Weather extends Component {

    constructor(props) {
    super(props);
    this.state = {
      weather: [],
      temperature:[],
    };
  }

  componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=3c2bc5c590b95a3571b9765a3d899c8f')
      .then(res => res.json())
      .then(response => {
        this.setState({
          city: response,
          weather: response.weather,
          temperature: response.main,
        });
      });
  }

  render() {
    const { city } = this.state;
    const { weather } = this.state;
    const { temperature } = this.state;
      return (
        <div className="container">
          <div className="row">
            {weather.map(weat => ( 
                    <div className="col" key={weat.id} >
                      <div className="weather-card one">  
                        <div className="top">
                          <div className="wrapper">
                              <h2 className="heading">{city.name}</h2>
                              <h2 className="location">{weat.main}</h2>
                              <p className="temp temp-bottom">
                                <h2 className="location">{temperature.temp} K</h2>
                                <h2 className="location">Humidity | {temperature.humidity} %</h2>
                              </p>
                          </div>
                        </div>
                      </div>
                    </div>
            ))}  
          </div>           
        </div> 

      );    
     }
   }
  
  export default Weather;

