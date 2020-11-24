import React, { useState } from "react";
import Zip from 'react-zipcode';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

// implement yup for validation
// move to formik


const Header = () => {
  const [search, setSearch] = useState({
    zipcode: "",
    city: "",
  })

  const [data, setData ] = useState({})

  const handleChange = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
    console.log("zip", search)
  }

  const formSubmit = (e) => {
      e.preventDefault();

      console.log("zip", search)
      axiosWithAuth()
      .get(`current.json?key=${API_KEY}&q=${search.zipcode}`)
      .then(res => {
        setData(res.data)
        console.log(res)
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="zipcode"
          value={search.zipcode}
          onChange={handleChange}
        />
          {/* <Zip onValue={(value) => setZip(value)} /> */}


      </form>
      <button>Click</button>
      <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"/></a>

      <div>
       {`${data?.location?.name}, ${data?.location?.region}`}
      
      </div>
    </div>
  );
};

export default Header;
