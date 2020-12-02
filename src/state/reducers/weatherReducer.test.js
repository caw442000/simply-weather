import { types } from '../actions'
import {weatherReducer, initialState} from './weatherReducer' 

describe('Weather Reducer', () => {

  it('Should return default default state', () => {
    const newState = weatherReducer(undefined, {});
    expect(newState).toEqual(initialState)
  })

  it("Should return new state if receiving type", () => {
    const data = {current: {}, location: {}, forecast: {}}
    const newState = weatherReducer(undefined, {
      type: types.FETCH_WEATHER_SUCCESS, 
      payload: data
    });
    expect(newState.data).toEqual(data)
  })

});