import { Drawer,
  Grid,
  Avatar,
  Badge,
  Typography,
  Divider,
  Button } from '@mui/material';
import React from 'react';
import '../../assets/style/style.css';
import { styled } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const SideMenu = ({ setOpenSideMenu, openSideMenu }) => {
  return (
    <div>
        <Drawer 
          open={openSideMenu}
          anchor='left'
          onClose={() => setOpenSideMenu(false)}
        >
          <Grid container spacing={2} className="drawer" style={{margin:'1em', marginTop: '1em'}}>
            <Grid item xs={4} style={{marginLeft:'1em'}}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar alt="Remy Sharp"/>
              </StyledBadge>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6"  >Klemen Nedelko</Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid xs={12}>
            <Button fullWidth variant="outlined" endIcon={<LogoutIcon/>} color="error"> Logout</Button>
          </Grid>
        </Drawer>
    </div>
  )
}
