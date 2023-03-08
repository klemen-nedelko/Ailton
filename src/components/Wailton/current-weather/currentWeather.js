import { Card, CardContent, Typography, Grow } from '@mui/material';
import React from 'react';
import "./currentWeather.css";

const CurrentWeather = ({ data }) => {
    const zoom = true;
    return (
        <>
        <Grow
        in={zoom}
        >
        <Card className="weather">
            <div className="top">
                <div>
                    <label className="city">{data.city} </label>
                    <label className="weatherDescription"> {data.weather[0].description}</label>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}/>

            </div>
            <CardContent className="bottom">
                <Typography className="temperatur">{Math.round(data.main.temp)}°C</Typography>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure}hPa</span>
                    </div>
                </div>
            </CardContent>
        </Card>
        </Grow>
        </>
    )
}

export default CurrentWeather