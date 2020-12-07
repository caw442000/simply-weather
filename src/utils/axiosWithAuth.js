import axios from 'axios'

export const axiosWithAuth = () => {
  return axios.create({
      baseURL: `https://api.weatherapi.com/v1/`,
      headers: {
      }
  });
}

