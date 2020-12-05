import React, {useContext} from "react";
import { useSelector } from "react-redux";
import ForecastCard from "./ForecastCard";
import { WeatherContext, DispatchContext } from "../../../contexts/WeatherContext";




const ForecastWeather = ({}) => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(WeatherContext);
  // const forecastData = useSelector((state) => state.weather.data.forecast);
  const forecastData = state.data.forecast;
  
  console.log("forecast data", forecastData)

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
