import React from 'react';
import { UserAuth } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const {user, logout} = UserAuth();
    const navigate = useNavigate();
    const handleLogout = async (e) => {
        e.preventDefault();
        try{
            await logout();
            navigate('/');
            console.log("Logged out");
        }catch(e){
            console.log(e.message);
        }

    }
  return (
    <div>Account
        <p>Email: {user&& user.email}</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Account