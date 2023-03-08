import { Typography } from '@mui/material'
import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'
import Search from './search'
import CurrentWeather from './current-weather/currentWeather'
import { WEATHER_API_KEY, WEATHER_API_URL } from './api'
import Forecast from './forecast/Forecast'

const Wailton = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => {
        console.error(error);
      })
  }
  console.log(forecast);
  return (
    <Layout>
      <Typography variant='h6'>Weather visualization  <FontAwesomeIcon icon={faCloudSunRain} /></Typography>
      <Search
        onSearchChange={handleOnSearchChange}
      />
      {currentWeather ? <CurrentWeather
        data={currentWeather}
      /> :
        " "}
        {forecast? <Forecast data={forecast}/>:""}
    </Layout>
  )
}

export default Wailton