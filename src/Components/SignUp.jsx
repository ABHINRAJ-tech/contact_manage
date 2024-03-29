//SignUP.jsx page
import React, { useState } from 'react';
import { auth} from './utils/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'

  const SignUp = () => {
    const navigate =useNavigate()
   

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignUp = async (e) => {
      e.preventDefault(); 
    
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      window.alert("successful")
      console.log("success" ,user);
      navigate("/ContactList")
     
        // Redirect or perform actions after successful signup
      })
      .catch ((error) => {
  
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error signing up:', error);
          window.alert(errorMessage)
      });
      };
  
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
    };
  
export default SignUp