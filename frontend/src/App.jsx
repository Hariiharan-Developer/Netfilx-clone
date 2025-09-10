import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import Profile from './components/ProtectedRoute/ProtectedRoute'; // your protected page

const App = () => {
  return (
  <>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/profile" element={<Profile />} /> {/* Protected page */}
      </Routes>
   </>
  );
};

export default App;
