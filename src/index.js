import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rocket from './components/Rockets/Rocket';
import Mission from './components/Missions/Missions';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Rocket />} />
      <Route path="/components/Missions/Missions" element={<Mission />} />
      <Route path="/components/Profile/Profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>,
);
