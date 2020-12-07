import React, { useContext } from "react";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./Forecast/ForecastWeather";
import { WeatherContext, DispatchContext } from "../../contexts/WeatherContext";

import WeatherToggle from "./WeatherToggle";
import { CircularProgress } from "@material-ui/core";

import './WeatherContainer.css'

const WeatherContainer = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(WeatherContext);

  const error = state.error;
  const isFetching = state.isFetching;
  const toggleMetric = state.toggleUS;
  const currentFetched = state.data.current;

  return (
    <div className="weather__container" data-testid='component-weathercontainer'>
      {isFetching ? (
        <CircularProgress size="4rem" color="inherit" thickness={4} />
      ) : error ? (
        <>
          <h1>
            Error: Input valid entry using zip code, city, or state and select
            from dropdown menu{" "}
          </h1>
        </>
      ) : currentFetched ? (
        <>
          <div className="weather__container__top">
            <WeatherToggle />
            <CurrentWeather metric={toggleMetric} />
          </div>
          <ForecastWeather metric={toggleMetric} />
        </>
      ) : null}
    </div>
  );
};

export default WeatherContainer;
