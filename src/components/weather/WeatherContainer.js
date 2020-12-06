import React, {useContext} from "react";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./Forecast/ForecastWeather";
import WeatherToggle from "./WeatherToggle";
import { WeatherContext, DispatchContext } from "../../contexts/WeatherContext";

import { CircularProgress } from "@material-ui/core";




const WeatherContainer = () => {  
  const dispatch = useContext(DispatchContext);
  const state = useContext(WeatherContext);
  

  const error = state.error
  const isFetching = state.isFetching
  const toggleMetric = state.toggleUS 
  const currentFetched = state.data.current

  return (
    <div className="weather__container">
      {isFetching ? (
        <CircularProgress size="4rem" color="inherit" thickness={4} />
      ) : error ? (
        <>
          <h1>Error: Input valid entry using zip code, city, or state and select from dropdown menu </h1>
        </>
      ) : (
        <>
        <div className = "weather__container__top">

          {currentFetched && <WeatherToggle />}
          <CurrentWeather metric={toggleMetric} />

          </div>
          <ForecastWeather metric={toggleMetric} />
          </>
      )}
    </div>
  );
};

export default WeatherContainer;
