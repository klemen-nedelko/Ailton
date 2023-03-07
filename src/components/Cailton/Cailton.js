import { Grid, Typography } from '@mui/material'
import React from 'react'
import Dial from '../Dial/Dial'
import Layout from '../Layout/Layout'
import Date from './Date'
import Input from './Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const Cailton = () => {
  return (
        <Layout>
            <Typography variant="h6">Make a appointment   <FontAwesomeIcon icon={faCalendar} /></Typography>
        <Grid item>
                <Date/>
            </Grid>
            <Grid item>
                <Input/>
            </Grid>
        <Dial/>
        </Layout>
  )
}

export default Cailton