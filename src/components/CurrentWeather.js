import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const weatherData = useSelector((state) => state.weather.data);

  console.log("current weather", weatherData)

  return (
    <div>
      <h1>Current Weather</h1>
      <p>
        {weatherData.current &&
          `${weatherData?.location?.name}, ${weatherData?.location?.region}`}
      </p>
    </div>
  );
};

export default CurrentWeather;
