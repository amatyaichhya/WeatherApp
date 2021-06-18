import Axios from 'axios';

const SET_WEATHER = 'SET_WEATHER';
const GET_WEATHER = 'GET_WEATHER';

Axios.interceptors.response.use(response => {
  console.log('Response:', JSON.stringify(response, null, 2));
  return response;
});

export function setWeather(weather) {
  if (weather) {
    return {
      type: SET_WEATHER,
      payload: weather,
    };
  }
}

export function weatherRequest() {
  return {
    type: 'WEATHER_REQUEST',
  };
}

export function weatherError(error) {
  return {
    type: 'WEATHER_ERROR',
    payload: error,
  };
}

export function getWeather(id) {
  return {
    type: GET_WEATHER,
    payload: id,
  };
}

export function fetchWeather(city) {
  return async function (dispatch) {
    dispatch(weatherRequest());

    try {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=b31f986179635820b5d31e28a4cf9fc2`;
      const response = await Axios.get(weatherUrl);

      dispatch(setWeather(response.data));
      dispatch(getWeather(0));
    } catch (error) {
      dispatch(weatherError(error));
    }
  };
}
