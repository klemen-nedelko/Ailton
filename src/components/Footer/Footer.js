import { AppBar, Grid, Typography } from '@mui/material'
import React from 'react';

import '../../assets/style/style.css';

const Footer = () => {
  return (
    <div>
        <AppBar position="static" className="footer">
            <Grid container
            direction="column"
            alignItems="center"
            >
                <Grid item xs={4}>
                <Typography>Ailton ©copyright {(new Date().getFullYear())}</Typography>
                </Grid>
            </Grid>
            
        </AppBar>
    </div>
  )
}

export default Footer