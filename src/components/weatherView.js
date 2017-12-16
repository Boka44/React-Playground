import React, { Component } from 'react';
import { WeatherForm } from './weatherForm';
import { WeatherCard } from './weatherCard';

export class WeatherView extends Component {
    constructor(props) {
      super(props);
        this.state = {
            lat: 0,
            long: 0,
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (lat, long) => {
        this.setState({
          lat,
          long
        });
    }


    render() {
        return(
          <div>
            <WeatherForm onSubmit={this.onSubmit}/>
            <WeatherCard lat={this.state.lat} long={this.state.long}/>
          </div>

        )
    }
}