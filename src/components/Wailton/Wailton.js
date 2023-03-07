import { Typography } from '@mui/material'
import React from 'react'
import Layout from '../Layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'

const Wailton = () => {
  return (
    <Layout>
        <Typography  variant='h6'>Weather visualization  <FontAwesomeIcon icon={faCloudSunRain} /></Typography> 
    </Layout>
  )
}

export default Wailton