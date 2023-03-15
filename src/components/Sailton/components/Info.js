import React from 'react';
import {Button, Tooltip} from '@mui/material';

const Info = () => {

  return (
    <>
    <Tooltip title="To see the stock information please write the stock name into searchbar and WAIT a few seconds to load data from the API. AND PRESS ENTER">
        <Button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
    </Button>
    </Tooltip>
    </>
  )
}

export default Info