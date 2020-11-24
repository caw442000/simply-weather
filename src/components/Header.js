import React, { useState } from "react";
import Zip from "react-zipcode";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import { fetchWeather } from "../store/actions";

import { useSelector, useDispatch } from "react-redux";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// implement yup for validation
// move to formik

const Header = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);

  const [search, setSearch] = useState({
    zipcode: "",
    city: "",
  });

  // const [data, setData ] = useState([])

  console.log("length", weatherData.length);
  console.log("data", weatherData);

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
    console.log("zip", search);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("zip", search);

    dispatch(fetchWeather(search));
    setSearch({
      zipcode: "",
      city: "",
    })
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="zipcode">Zip Code: </label>
        <input
          type="text"
          name="zipcode"
          value={search.zipcode}
          onChange={handleChange}
        />
        <label htmlFor="city">City: </label>
        <input
          type="text"
          name="city"
          value={search.city}
          onChange={handleChange}
        />
        {/* <Zip onValue={(value) => setZip(value)} /> */}

        <button>Click</button>
      </form>
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img
          src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          alt="Weather data by WeatherAPI.com"
          border="0"
        />
      </a>

      <div>
        {weatherData.current &&
          `${weatherData?.location?.name}, ${weatherData?.location?.region}`}
      </div>
    </div>
  );
};

export default Header;
