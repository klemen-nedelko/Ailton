import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { UserAuth } from './context/AuthContext';

const Signup = () => {

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [error, setError]= useState("");
    const navigate = useNavigate();

    const {createUser} = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try{
            await createUser(email,password);
            navigate("/Dashboard");

        }catch(e){
            setError(e.message);
            console.log(e.message);
        }
    }


  return (
    <div>
        <h1>Sign in to your account</h1>
        <p> Don't have a account? <Link to='/signup'>Sign up</Link></p>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input
                onChange={(e) =>setEmail(e.target.value)}
                type="email" />
            </div>
            <div>
                <label>Password</label>
                <input 
                onChange={(e) =>setPassword(e.target.value)}
                type="password" />
            </div>
            <div>
                <button type="submit">Sign up</button>
            </div>
        </form>
        {error}
    </div>
  )
}

export default Signup