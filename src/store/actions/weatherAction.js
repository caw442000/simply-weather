import * as api from '../../api';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const FETCH_WEATHER_START = " FETCH_WEATHER_START";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";
export const FETCH_FORECAST_START = " FETCH_FORECAST_START";
export const FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESS";
export const FETCH_FORECAST_FAILURE = "FETCH_FORECAST_FAILURE";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY


export const fetchWeather = (search) => async (dispatch) => {
  dispatch({type: 'FETCH_WEATHER_START'})

  try {
    // const { data } = await axiosWithAuth().get(`current.json?key=${API_KEY}&q=${search.zipcode.length === 5 ? search.zipcode : search.city}`)
    const { data } = await api.fetchForecastWeather(search)
    dispatch({type: 'FETCH_WEATHER_SUCCESS', payload: data})
  } catch (error) {
    console.log(error)
    dispatch({type: 'FETCH_WEATHER_FAILURE', payload: error})

  }
  
}
export const fetchForecast = (search) => async (dispatch) => {
  dispatch({type: 'FETCH_FORECAST_START'})

  try {
    // const { data } = await axiosWithAuth().get(`current.json?key=${API_KEY}&q=${search.zipcode.length === 5 ? search.zipcode : search.city}`)
    const { data } = await api.fetchForecastWeather(search)

    console.log ( "data in Forecast fetch", data)
    dispatch({type: 'FETCH_FORECAST_SUCCESS', payload: data})
  } catch (error) {
    console.log(error)
    dispatch({type: 'FETCH_FORECAST_FAILURE', payload: error})

  }
  
}