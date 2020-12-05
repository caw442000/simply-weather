import * as api from '../../api';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { types } from './types'




const API_KEY = process.env.REACT_APP_WEATHER_API_KEY


export async function fetchWeather(dispatch, search) {
  console.log('inside fetch weather');
  await dispatch({ type: types.FETCH_WEATHER_START, payload: true });
  try {
    const { data } = await api.fetchForecastWeather(search);
    dispatch({ type: types.FETCH_WEATHER_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.FETCH_WEATHER_FAILURE, payload: error });

  }

}
