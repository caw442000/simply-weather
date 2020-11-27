import { axiosWithAuth } from '../utils/axiosWithAuth';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY


// export const fetchCurrentWeather = (search) => axiosWithAuth().get(`current.json?key=${API_KEY}&q=${search.zipcode.length === 5 ? search.zipcode : search.city}`)
export const fetchForecastWeather = (search) => axiosWithAuth().get(`forecast.json?key=${API_KEY}&q=${search}&days=3`)
// export const fetchWeatherHistory = (search) => axiosWithAuth().get(`forecast.json?key=${API_KEY}&q=${search.zipcode.length === 5 ? search.zipcode : search.city}`)
// export const fetchCurrentWeather = (search) => axiosWithAuth().get(`current.json?key=${API_KEY}&q=${search.zipcode.length === 5 ? search.zipcode : search.city}`)
// export const fetchForecastWeather = (search) => axiosWithAuth().get(`forecast.json?key=${API_KEY}&q=${search.zipcode.length === 5 ? search.zipcode : search.city}&days=3`)
// export const fetchWeatherHistory = (search) => axiosWithAuth().get(`forecast.json?key=${API_KEY}&q=${search.zipcode.length === 5 ? search.zipcode : search.city}`)
