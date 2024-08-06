import React, { useState} from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();
  const handleLogin=(e)=>{
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password).then(()=>{
      // alert('Logged in')
      navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>navigate('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
