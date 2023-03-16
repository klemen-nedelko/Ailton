import { Typography,Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faHouse } from '@fortawesome/free-solid-svg-icons'
import Dashboard from './components/Dashboard';
import "../../index.css";
import ThemeContext from './context/ThemeContext';
import StockContext from './context/StockContext';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';


ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE)

const Sailton = () => {

  const [darkMode, setDarkMode]= useState(false);
  const [stockSymbol, setStockSymbol] = useState("");
  const navigate = useNavigate();

  const goHome = ()=>{
    navigate("/");
  }

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <div className="grid content-center mx-10">
      <Typography variant='h6' color="white"><Button onClick={goHome} color="info"><FontAwesomeIcon icon={faHouse}/></Button> Sailton! Stock price visualization, for more information hover over 🛈 icon<FontAwesomeIcon icon={faArrowTrendUp} /></Typography>
        
      </div>
         <StockContext.Provider value={{stockSymbol, setStockSymbol}}>
            <Dashboard />
          </StockContext.Provider>
    </ThemeContext.Provider>
  )
}

export default Sailton