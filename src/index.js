import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rocket from './components/Rocket';
import Mission from './components/Missions';
import Profile from './components/Profile';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Rocket />} />
      <Route path="/components/Missions" element={<Mission />} />
      <Route path="/components/Profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>,
);
