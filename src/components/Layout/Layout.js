import { Grid } from '@mui/material'
import React from 'react'

const Layout = ({children}) => {
  return (
    <Grid container
      direction="column"
      alignItems="center"
      >
      <Grid item xs={4}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout