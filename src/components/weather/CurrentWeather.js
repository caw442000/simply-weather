import { useContext } from "react";
import { WeatherContext,  } from "../../contexts/WeatherContext";


const CurrentWeather = () => {
  const state = useContext(WeatherContext);

  const weatherData = state.data
  const metric = state.toggleUS


  return (
    <>
      {!weatherData.current ? null : (
        <div className="current__card">
          <h1 className="current__card__location">
            {`${weatherData?.location?.name}, ${weatherData?.location?.region}`}
          </h1>
          <div className="icon__container">
            <img
              className="current__card__icon"
              src={weatherData?.current?.condition.icon}
            />
            {metric === true ? (
              <h1 className="current__card__temp">
                {" "}
                {Math.round(weatherData?.current?.temp_f)}&deg;F
              </h1>
            ) : (
              <h1 className="current__card__temp">
                {" "}
                {Math.round(weatherData?.current?.temp_c)}&deg;C
              </h1>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentWeather;
