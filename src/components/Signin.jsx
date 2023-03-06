import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';
import { Card, Button, Typography, Grid, TextField } from '@mui/material';


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
            <Typography variant='h5'>Log in to your account</Typography>

            <form onSubmit={handleSubmit}>
                <div>
                    <Typography>Email</Typography>
                    <TextField 
                        label="Outlined"
                        variant="outlined"
                        onChange={(e)=> setEmail(e.target.value)}
                        type="email" />
                </div>
                <div>
                    <Typography>Password</Typography>
                    <TextField
                        label="Outlined"
                        variant="outlined"
                        onChange={(e)=> setPassword(e.target.value)}
                        type="password" />
                </div>
                        <Button type="submit">Sign up</Button>
            </form>
            {error}
        </Card>
    </Grid>
</Grid>
  )
}

export default Signin