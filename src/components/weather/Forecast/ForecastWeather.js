import React, {useContext} from "react";
import ForecastCard from "./ForecastCard";
import { WeatherContext } from "../../../contexts/WeatherContext";
import './ForecastWeather.css'




const ForecastWeather = () => {
  const state = useContext(WeatherContext);
  const forecastData = state.data.forecast;
  

  return (
    <div className="forecast__container">
      {forecastData?.forecastday.map((forecast, index) => (
        <ForecastCard key={index} index={index} forecast = {forecast} />
        )
      )

      }
    </div>
  );
};

export default ForecastWeather;
