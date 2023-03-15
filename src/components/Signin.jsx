import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';
import { Card, Button, Grid, TextField, Alert } from '@mui/material';
import logo from '../assets/ailton_logo.png';
import Menu from './FreeMenu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import InputAdornment from '@mui/material/InputAdornment';
import Footer from './Footer/Footer';


const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]= useState("");
    const [isError, setIsError]= useState(false);
    const navigate = useNavigate();

    const {signIn, user} = UserAuth();

    const handleSubmit = () =>{
        try{
            signIn(email, password);
            navigate("/Dashboard");
        }catch(e){
            setError(e.message);
            setIsError(true);
        }
    } 
    useEffect(() => {
        user ? navigate("/Dashboard") : navigate("/");
    },[user, navigate] )


  return (
    <>
        <Grid container 
            direction="column"
            alignItems="center"
        >
            <Grid item xs={4}>
            <Card style={{ alignItems: 'center', textAlign: 'center' }}>
                <img src={logo} alt="logo" style={{width:'250px', height:'250px', marginLeft:'auto', marginRight:'auto'}}/>
                <form onSubmit={handleSubmit}>
                    <Grid
                        alignItems="center"
                        >
                        <TextField 
                            label="Email"
                            variant="outlined"
                            onChange={(e)=> setEmail(e.target.value)}
                            type="email" 
                            margin="dense"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faUser} />
                                </InputAdornment>
                                ),
                            }}
                            />
                            </Grid>
                            <Grid>
                        <TextField
                            label="Password"
                            variant="outlined"
                            onChange={(e)=> setPassword(e.target.value)}
                            type="password" 
                            margin="dense"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faLock} />
                                </InputAdornment>
                                ),
                            }}
                            />
                    </Grid>
                    <Button type="submit" size="large"  variant="contained" 
                    style={{marginTop:'1em', marginBottom:'1em'}}
                    >Login</Button>
                </form>
            </Card>
            <Menu />
            {isError ?  <Alert severity="error">Email or password is incorrect {error}</Alert> : ""}
        </Grid>
    </Grid>
<Footer/>
</>
  )
}

export default Signin