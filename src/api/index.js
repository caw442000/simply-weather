import { axiosWithAuth } from '../utils/axiosWithAuth';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY


// API call to get current weather and forecast together

export const fetchForecastWeather = (search) => axiosWithAuth().get(`forecast.json?key=${API_KEY}&q=${search}&days=3`)

