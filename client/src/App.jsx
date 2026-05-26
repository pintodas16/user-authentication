import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Register from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/Resetpassword';
import Home from './pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer'

import {useDispatch, useSelector} from 'react-redux';
import { getMeThunk } from './features/authentication/authenticationSlice';

import ProtectedRoute from './Components/ProtectedRoutes';

function App() {
 const dispatch = useDispatch();
    const { token , isInitialized } = useSelector((state) => state.authentication);

    useEffect(() => {
      console.log("token:", token);
    console.log("isInitialized:", isInitialized);
        if (token) {
            dispatch(getMeThunk()); // ✅ restore user on every page refresh
        }
    }, []);

    if (token && !isInitialized) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <p className="font-Manrope text-dark">Loading...</p>
      </div>
    );
  }

  return (
    <>
    
      {/* <Routes>
      

      <Route path="/" element={<Home />} />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />}  /> 
      <Route path="/reset-password/:token" element={<ResetPassword />}  />

    </Routes> */}


    <Routes>

        {/* ✅ Protected — only logged in users */}
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

        {/* ✅ Public — only non logged in users */}
        <Route path="/login" element={
          token ? <Navigate to="/" replace /> : <Login />
        } />
        <Route path="/register" element={
          token ? <Navigate to="/" replace /> : <Register />
        } />
        <Route path="/forgot-password" element={
          token ? <Navigate to="/" replace /> : <ForgotPassword />
        } />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

      </Routes>
   
    </>
  )
}

export default App
