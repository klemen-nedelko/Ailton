import { AppBar, IconButton, Box, Toolbar } from '@mui/material'
import React from 'react';
import Logo from '../../assets/ailton_logo.png';

import MenuIcon from '@mui/icons-material/Menu';

export const TopBar = ( { setOpenSideMenu } ) => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <img src={Logo} alt="Logo" className="logo" />
                </IconButton>
                <IconButton 
                  edge="start" color="inherit" 
                  aria-label="menu" sx={{ mr: 2 }}
                  onClick={() => setOpenSideMenu(true)}
                  >
                    <MenuIcon/>
                </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}
