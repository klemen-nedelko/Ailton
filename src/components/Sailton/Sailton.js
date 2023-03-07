import { Typography } from '@mui/material';
import React from 'react';
import Layout from '../Layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'

const Sailton = () => {
  return (
    <Layout>
        <Typography variant='h6'> Sailton Stock price visualization    <FontAwesomeIcon icon={faArrowTrendUp} /></Typography>
    </Layout>
  )
}

export default Sailton