import { Grid, MenuItem, MenuList, Typography } from '@mui/material';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faArrowTrendUp, faCloudSunRain } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


const Menu = () => {

    const navigate = useNavigate();
    const sendToCailton = () =>{
        navigate("/Cailton");
    }
    const sendToSailton = () =>{
        navigate("/Sailton");
    }
    const sendToWailton = () =>{
        navigate("/Wailton");
    }


  return (
    <div>
        <Typography variant="h6" color="white">Some free options to use</Typography>
        <Grid container spacing={2}>
            <Grid item >
                <MenuList sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', backgroundColor: '#222'}}>
                    <MenuItem onClick={sendToCailton}  disabled>
                        <Typography variant="h6"  color="white">Caitlon</Typography>
                    <FontAwesomeIcon icon={faCalendar}  color="white"/>
                </MenuItem>
                    <MenuItem onClick={sendToSailton}  disabled>
                    <Typography variant="h6"  color="white">Sailton </Typography>
                <FontAwesomeIcon icon={faArrowTrendUp}  color="white"/></MenuItem>
                    <MenuItem  onClick={sendToWailton}>
                    <Typography variant="h6"  color="white">Wailton </Typography>
                    <FontAwesomeIcon icon={faCloudSunRain}  color="white"/>
                    </MenuItem>
                </MenuList>
            </Grid>
        </Grid>
    </div>
  )
}

export default Menu