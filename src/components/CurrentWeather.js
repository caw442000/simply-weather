import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const weatherData = useSelector((state) => state.weather.data);

  console.log("current weather", weatherData)

  return (
    <div className ='current__card'>
      {weatherData.current && <h1>Current Weather</h1>}
      
      {weatherData.current && <p> {weatherData?.location?.name}, {weatherData?.location?.region}</p>}
      
    </div>
  );
};

export default CurrentWeather;
