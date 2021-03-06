import React, { Component } from 'react';
import ReactAnimatedWeather from 'react-animated-weather';


const defaults = [
  {
      icon: 'CLEAR_DAY',
      color: 'white',
      size: 175,
      animate: true
  },
  {
      icon: 'CLEAR_NIGHT',
      color: 'white',
      size: 175,
      animate: true
  },
  {
      icon: 'PARTLY_CLOUDY_DAY',
      color: 'white',
      size: 175,
      animate: true
  },
  {
      icon: 'PARTLY_CLOUDY_NIGHT',
      color: 'white',
      size: 175,
      animate: true
  },
  {
      icon: 'CLOUDY',
      color: 'white',
      size: 175,
      animate: true
  },
  {
      icon: 'RAIN',
      color: 'white',
      size: 175,
      animate: true
  },
  {
      icon: 'SLEET',
      color: 'white',
      size: 175,
      animate: true
  },
  {
      icon: 'SNOW',
      color: 'white',
      size: 175,
      animate: true
  },
  {
      icon: 'WIND',
      color: 'white',
      size: 175,
      animate: true
  },
  {
      icon: 'FOG',
      color: 'white',
      size: 175,
      animate: true
  }
];

function iconConverter(arg){
    switch (arg) {
        case 'clear-day': return 0;
            break;
        case 'clear-night': return 1;
            break;
        case 'partly-cloudy-day': return 2;
            break;
        case 'partly-cloudy-night': return 3;
            break;
        case 'cloudy': return 4;
            break;
        case 'rain': return 5;
            break;
        case 'sleet': return 6;
            break;
        case 'snow': return 7;
            break;
        case 'wind': return 8;
            break;
        case 'fog': return 9;
            break;

    }
}

const WCard = ({day, high, low, humidity, summary, sunrise, sunset, windspeed, time, rainProb, icon}) =>{
    return (
        <div>
            <p>{time}</p>
            <div id='wCardIcon'>

                <ReactAnimatedWeather

                    icon={defaults[iconConverter(icon)].icon}
                    color={defaults[iconConverter(icon)].color}
                    size={defaults[iconConverter(icon)].size}
                    animate={defaults[iconConverter(icon)].animate}
                  />
                <div>
                    <p>&#8679; {high}&#8457;</p>
                    <p>{low}&#8457; &#8681;</p>
                </div>
            </div>
            <p id="wCardSum">{summary}</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind speed: {windspeed}mph</p>
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>
            <p>Chance of rain: {rainProb}%</p>

        </div>
    )};

export class WeatherCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requestFailed: false,
            info: undefined
        }
    }

    componentDidMount(){
      this.fetchData(this.props.lat, this.props.long);
    }

    componentWillReceiveProps(nextProps){
       this.fetchData(nextProps.lat, nextProps.long);
    }

    timeDateConverter(tempTime) {
        var time = tempTime *1000;
        var d = new Date(time);
        var formattedDate = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();

        return formattedDate
    }

    removeMilitary(hours){

        if (hours > 0 && hours <= 12) {
            hours = "" + hours;
        } else if (hours > 12) {
            hours = "" + (hours - 12);
        } else if (hours === 0) {
            hours= "12";
        }
        return hours;
    }

    timeConverter(tempTime) {
        var time = tempTime *1000;
        var d = new Date(time);
        var hours = d.getHours();
        if (hours>=12){                 
                var suffix = "P.M.";}
            else{
                suffix = "A.M.";}
        var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();

        hours = this.removeMilitary(hours);

        var formattedTime = hours + ":" + minutes + " " + suffix;

        return formattedTime;
    }

    fetchData(lat, long){
      const myAPI = 'https://blooming-earth-34077.herokuapp.com/city/sanFran';
      const weatherRequest = `https://api.darksky.net/forecast/fbdca57e2ef5b4ac0f12e3d3779f090e/${lat},${long}`;
      console.log(weatherRequest);
      fetch(myAPI).then( data => data.json() ).then( data => {
            this.setState({
                info: data,
                requestFailed: true
            });
            console.log(data);
        }, () => {
            this.setState({
            requestFailed: true
            })
      })
    }


    render() {
        return(
            this.state.info ? (<div>
                <h1>The current temperature in {this.state.info.timezone} is: {this.state.info.currently.apparentTemperature}</h1>
                <h1>The 8 day forecast for {this.state.info.timezone}:</h1>
                <ul>
                    {this.state.info.daily.data.map((day, id) =>
                        <div key={'_' + Math.random().toString(36).substr(2, 9)} id="weatherCard">
                            <WCard time={this.timeDateConverter(day.time)}
                                high={day.temperatureHigh}
                                low={day.temperatureLow}
                                summary={day.summary}
                                icon={day.icon}
                                humidity={day.humidity}
                                sunrise={this.timeConverter(day.sunriseTime)}
                                sunset={this.timeConverter(day.sunsetTime)}
                                rainProb={day.precipProbability}
                                windspeed={day.windSpeed}
                            />
                        </div>
                    )}
                </ul>

                <a href="https://darksky.net/poweredby/">Powered by DarkSky</a>

            </div>
          ) : <div>Loading</div>
        )
    }
}

//node API usage
// const http = require('http');
// http// get(uri)
// const rp = require('request-promise-native');

// rp.get(){
// 	return new Promise((resolve, reject) => {
// 		if(camebackfrommovies) resolve();
// 		else rject;
// 	});
// }

// rp.get(getUri)
// .then((res) => {
// 	res.lasjklsa.body
// }, (err)=>{
// 	//
// });

// const http = require('http');
// http// get(uri)