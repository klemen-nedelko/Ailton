import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Input = () => {
    const [email, setEmail] = useState("");

    const acceptAppointment = (e) =>{
        e.preventDefault();
    }
    
  return (
    <div>
        <TextField 
        value={email} 
        onChange={(e) => {setEmail(e.target.value)}}
        ></TextField>
        <Button onClick={acceptAppointment}>Save Appointment</Button>
        
    </div>
  )
}

export default Input