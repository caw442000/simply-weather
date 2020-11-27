import { useEffect } from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const weatherData = useSelector((state) => state.weather.data);
  const dateTime = new Date(0)

  console.log("current weather", weatherData)

  useEffect(() => {
    console.log("local code", weatherData?.location?.localtime_epoch)
     dateTime.setUTCSeconds(weatherData?.location?.localtime_epoch)
     console.log(dateTime)
    return () => {
    }
  }, [weatherData])

//   const arr1 = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
//   const arr2 = [2,3,4,4,2,2222,3,4,4,5,5,6,6,7,5,32,3,4,5]

//   const setup = [...new Set(arr1.concat(arr2))]
//   // setup.add(...numbersa)
  
// console.log(setup)
  

  return (
    <div className ='current__card'>
      {weatherData.current && <h1>Current Weather in {weatherData?.location?.name}, {weatherData?.location?.region} </h1>}
      
      {/* {weatherData.current && <p> {weatherData?.location?.name}, {weatherData?.location?.region}</p>} */}
      {/* {weatherData.current && <p> {dateTime}</p>} */}
      {weatherData.current && <p> {weatherData?.current?.condition.text} </p>}
      {weatherData.current && <p> {Math.round(weatherData?.current?.temp_f)}&deg;F</p>} 
      {weatherData.current && <img src= {weatherData?.current?.condition.icon} />}


      
    </div>
  );
};

export default CurrentWeather;
