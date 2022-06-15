import React from 'react';
import { Link } from 'react-router-dom';
import './components/styles/header.css';
import logo from './components/logo.png';

function Header() {
  return (
    <header>
      <div>
        <img className="logo" src={logo} alt="logo-icon" />
        <h1>Space traveler hub</h1>
      </div>
      <nav>
        <Link className="rocket-link" to="/">Rockets</Link>
        <Link className="mission-link" to="/Missions">Missions</Link>
        <Link className="prof-link" to="/Profile">My Profile</Link>
      </nav>
    </header>
  );
}

export default Header;
