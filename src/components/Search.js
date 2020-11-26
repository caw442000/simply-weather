import React, { useState } from "react";
import { fetchWeather, fetchForecast } from "../store/actions";

import { useSelector, useDispatch } from "react-redux";

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_LOCATION_API_KEY;

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


  const formSubmit = async (e) => {
    e.preventDefault();
    // console.log("value to submit", value?.description);
    // console.log("value to option", option);

    
    try {
      // await dispatch(fetchWeather(option?.description || option || inputValue));
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
    <>
       <form className="search" onSubmit={formSubmit}>
        <label htmlFor="zipcode">Zip Code: </label>
        <input
          type="text"
          name="zipcode"
          placeholder="Enter Zip Code"
          value={search.zipcode}
          onChange={handleChange}
          style={{height: "1.5rem" }}
        />


        <button>ENTER</button>
      
    </form>
</>
  );
};

export default Search;
