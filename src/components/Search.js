import React, { useState } from "react";
import { fetchWeather, fetchForecast } from "../store/actions";

import { useSelector, useDispatch } from "react-redux";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// implement yup for validation
// move to formik

const Search = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);

  const [search, setSearch] = useState({
    zipcode: "",
    city: "",
    state: "",
  });

  console.log("length", weatherData?.length);
  console.log("data", weatherData);

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
    console.log("zip", search);
  };


  const formZipCodeSubmit = async (e) => {
    e.preventDefault();
    console.log("zip", search);
    try {
      await dispatch(fetchWeather(search));
      // dispatch(fetchForecast(search));
      
    } catch (error) {
        console.log("zipcode submit error", error)

    }

    setSearch({
      zipcode: "",
      city: "",
      state: "",
    })
  };
  return (
    <div className="search">
      <form onSubmit={formZipCodeSubmit}>
        <label htmlFor="zipcode">Zip Code: </label>
        <input
          type="text"
          name="zipcode"
          value={search.zipcode}
          onChange={handleChange}
        />
        {/*<label htmlFor="city">City: </label>
         <input
          type="text"
          name="city"
          value={search.city}
          onChange={handleChange}
        />
        <label htmlFor="state">State: </label>
        <input
          type="text"
          name="state"
          value={search.state}
          onChange={handleChange}
        /> */}
        {/* <Zip onValue={(value) => setZip(value)} /> */}

        <button>ENTER</button>
      </form>
      <div>
        {weatherData.current &&
          `${weatherData?.location?.name}, ${weatherData?.location?.region}`}
      </div>
      {/* <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img
          src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          alt="Weather data by WeatherAPI.com"
          border="0"
        />
      </a> */}

     
    </div>
  );
};

export default Search;
