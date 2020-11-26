import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CurrentWeather = () => {
  const weatherData = useSelector((state) => state.weather.data);
  const dateTime = new Date()

  console.log("current weather", weatherData)

  useEffect(() => {
    console.log("local code", weatherData.location.localtime_epoch)
     dateTime.setUTCSeconds(weatherData.location.localtime_epoch)
     console.log(dateTime)
    return () => {
    }
  }, [weatherData])
  

  return (
    <div className ='current__card'>
      {weatherData.current && <h1>Current Weather</h1>}
      
      {weatherData.current && <p> {weatherData?.location?.name}, {weatherData?.location?.region}</p>}
      {/* {weatherData.current && <p> {dateTime}</p>} */}
      {weatherData.current && <p> {weatherData?.current?.condition.text} </p>}
      {weatherData.current && <p> {Math.round(weatherData?.current?.temp_f)}&deg;F</p>} 
      {weatherData.current && <img src= {weatherData?.current?.condition.icon} />}


      
    </div>
  );
};

export default CurrentWeather;
