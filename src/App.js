import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/home/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './components/profile/Profile';
function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{

    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if (userAuth){
        //lOGGED IN
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
        console.log(userAuth);
      }else{
        //LOGGED OUT
        dispatch(logout)
      }
    })
    return unsubscribe;
  },[])
  return (
    <div className="app">  
      <Router>
        {!user ? (
          <Login />
        ): (
          <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route exact  path='/' element={<HomeScreen />}/>
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
