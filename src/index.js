import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import RocketList from './components/Rockets/RocketList';
import Mission from './components/Missions/Missions';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import store from './Redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<RocketList />} />
        <Route path="/components/Missions/Missions" element={<Mission />} />
        <Route path="/components/Profile/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
