//Login.jsx
import React, { useState } from 'react';
import { auth } from './utils/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

import {useNavigate} from 'react-router-dom'


const Login = () => {
  const navigate =useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
   
    signInWithEmailAndPassword(auth,email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
    window.alert("successful")
    console.log("success" ,user);
    navigate("/ContactList")

      // Redirect or perform actions after successful login
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error logging in:', error);
    console.error('Error Messagre:', errorMessage);
    
    window.alert(errorMessage)
  });

  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
  };

export default Login
