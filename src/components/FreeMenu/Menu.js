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
        <Typography variant="h6">Some free options to use</Typography>
        <Grid container spacing={2}>
            <Grid item >
                <MenuList sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <MenuItem onClick={sendToCailton}>
                        <Typography variant="h6">Caitlon</Typography>
                    <FontAwesomeIcon icon={faCalendar} />
                </MenuItem>
                    <MenuItem onClick={sendToSailton}>
                    <Typography variant="h6">Sailton </Typography>
                <FontAwesomeIcon icon={faArrowTrendUp} /></MenuItem>
                    <MenuItem  onClick={sendToWailton}>
                    <Typography variant="h6">Wailton </Typography>
                    <FontAwesomeIcon icon={faCloudSunRain} />
                    </MenuItem>
                </MenuList>
            </Grid>
        </Grid>
    </div>
  )
}

export default Menu