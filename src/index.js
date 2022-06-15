import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header';
import Rocket from './components/rocket';
import Mission from './components/missions';
import Profile from './components/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Rocket />} />
      <Route path="/Missions" element={<Mission />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>,
);
