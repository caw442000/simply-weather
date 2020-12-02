import * as api from '../../api';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { types } from './types'




const API_KEY = process.env.REACT_APP_WEATHER_API_KEY


export const fetchWeather = (search) => async (dispatch) => {
  await dispatch({type: types.FETCH_WEATHER_START})
  try {
    const { data } = await api.fetchForecastWeather(search)
    dispatch({type: types.FETCH_WEATHER_SUCCESS, payload: data})
  } catch (error) {
    console.log(error)
    dispatch({type: types.FETCH_WEATHER_FAILURE, payload: error})

  }
  
}
