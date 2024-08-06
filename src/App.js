import React,{useEffect,useContext} from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Signup from './Components/Signup/Signup';
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import {getAuth,onAuthStateChanged} from 'firebase/auth'

import Home from './Pages/Home';
import { AuthContext } from './store/FirebaseContext';
import Post from './store/PostContext'


function App() {
  const {setUser}=useContext(AuthContext);
  
  useEffect(()=>{
    const auth=getAuth();
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })
  },[])
  return (
    <div>
      <Post>
      <Routes>
        <Route path='/' element={<Home />}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/view' element={<View/>}></Route>

      </Routes>
      </Post>
    </div>
  );
}

export default App;
