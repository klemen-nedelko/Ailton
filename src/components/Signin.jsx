import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';
import { Card, Button, Typography, Grid, TextField } from '@mui/material';
import logo from '../assets/ailton_logo.png';


const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]= useState("");

    const navigate = useNavigate();

    const {signIn} = UserAuth();

    const handleSubmit = () =>{
        try{
            signIn(email, password);
            navigate("/dashboard");
        }catch(e){
            setError(e.message);
            console.log(e.message);
        }
    }

  return (
    <Grid container 
        direction="column"
        alignItems="center"
    >
        <Grid item xs={4}>
        <Card>
            <img src={logo} alt="logo" style={{width:'250px', height:'250px'}}/>
            <form onSubmit={handleSubmit}>
                <div>
                    <Typography>Email</Typography>
                    <TextField 
                        label="Email"
                        variant="outlined"
                        onChange={(e)=> setEmail(e.target.value)}
                        type="email" />
                </div>
                <div>
                    <Typography>Password</Typography>
                    <TextField
                        label="Password"
                        variant="outlined"
                        onChange={(e)=> setPassword(e.target.value)}
                        type="password" />
                </div>
                        <Button type="submit">Login</Button>
            </form>
            {error}
        </Card>
    </Grid>
</Grid>
  )
}

export default Signin