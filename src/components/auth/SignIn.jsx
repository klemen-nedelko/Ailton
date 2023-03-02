import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react'
import {auth} from '../../firebase';

export const SignIn = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((useCredentials) => {})
        .catch((error) =>{
            alert(error)
        })

    }

  return (
    <div>
        <form onSubmit={signIn}>
            <h1>Log In</h1>
            <input name='email' type='email' placeholder='Email' value={email} onChange={(e) =>setEmail(e.targe.value)} />
            <input name='password' type='password' placeholder='Password' value={password} onChange={(e) =>setPassword(e.targe.value)} />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
