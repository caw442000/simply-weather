import React from "react";
import { useSelector } from "react-redux";
import ForecastCard from "./ForecastCard";



const ForecastWeather = ({}) => {
  const forecastData = useSelector((state) => state.weather.data.forecast);

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
