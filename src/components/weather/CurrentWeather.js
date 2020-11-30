import { useEffect } from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const weatherData = useSelector((state) => state.weather.data);
  const metric = useSelector((state) => state.weather.toggleUS);

  const dateTime = new Date(0);

  console.log("current weather", weatherData);

  useEffect(() => {
    console.log("local code", weatherData?.location?.localtime_epoch);
    dateTime.setUTCSeconds(weatherData?.location?.localtime_epoch);
    console.log(dateTime);
    return () => {};
  }, [weatherData]);

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
            {/* <p> {weatherData?.current?.condition.text} </p> */}
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
