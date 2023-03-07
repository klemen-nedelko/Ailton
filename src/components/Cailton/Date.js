import React, { useState } from 'react';

import dayjs from 'dayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const Date = () => {

  const [date, setDate] = useState(null);

  const handleDateChange = (e) => {
    setDate(e.$D +"/"+ (e.$M+1)+"/" + e.$y);
    console.log(date);
  }
  return (
    <div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker  
        orientation="landscape" 
        defaultValue={dayjs()}
        onChange={handleDateChange}
        />
        </LocalizationProvider>
    </div>
  )
}

export default Date