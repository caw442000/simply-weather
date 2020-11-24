import axios from 'axios'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const axiosWithAuth = () => {
  return axios.create({
      baseURL: `http://api.weatherapi.com/v1/`,
      headers: {
      }
  });
}

