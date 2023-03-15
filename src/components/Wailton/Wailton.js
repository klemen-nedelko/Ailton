import { Typography, Button,Tooltip  } from '@mui/material'
import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faHouse } from '@fortawesome/free-solid-svg-icons'
import Search from './search'
import CurrentWeather from './current-weather/currentWeather'
import { WEATHER_API_KEY, WEATHER_API_URL } from './api'
import Forecast from './forecast/Forecast';
import "./current-weather/currentWeather.css";
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const goHome = ()=>{
    navigate("/");
  }

  return (
    <Layout>
      
      <Typography variant='h6' className='whiteColor'><Button onClick={goHome} color="info"><FontAwesomeIcon icon={faHouse}/></Button>
       Weather forecast and current weather for your city  <FontAwesomeIcon icon={faCloudSunRain} />
       <Tooltip title="To see the current weather and the forecast please write your city name into search bar and WAIT a few seconds to load data from the API.">
        <Button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
    </Button>
    </Tooltip>
       </Typography>

      <Search
        onSearchChange={handleOnSearchChange}
      />
      {currentWeather ? <CurrentWeather
        data={currentWeather}
      /> :
        " "}
        {forecast? 
          <Forecast data={forecast}/>
        :""}

    </Layout>
  )
}

export default Wailton